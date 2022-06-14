import Card from './card.js';
import {initialCards, validationConfig} from './constants.js';
import FormValidator from './formValidator.js';

//Переменные для попапа редактирования профиля
const profileEditPopup = document.querySelector(".popup_type_edit-profile");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileCloseButton = profileEditPopup.querySelector(".popup__close");
const profileName = document.querySelector(".profile__title");
const profileInfo = document.querySelector(".profile__subtitle");
const profileNameEditField = profileEditPopup.querySelector(
  ".popup__input_type_name"
);
const profileInfoEditField = profileEditPopup.querySelector(
  ".popup__input_type_info"
);
const profileEditForm = profileEditPopup.querySelector(".popup__form");

//Переменные для попапа увеличения фотографии
const imageZoomPopup = document.querySelector(".popup_type_zoom-image");
const zoomedImage = imageZoomPopup.querySelector(".popup__image");
const imageCaption = imageZoomPopup.querySelector(".popup__caption");
const zoomedImageCloseButton = imageZoomPopup.querySelector(".popup__close");

//Переменные для попапа создания новой карточки
const cardListWrapper = document.querySelector(".elements__cards");
const newCardPopup = document.querySelector(".popup_type_add-card");
const newCardTitle = newCardPopup.querySelector(".popup__input_type_name");
const newCardLink = newCardPopup.querySelector(".popup__input_type_url");
const newCardCreateButton = document.querySelector(".profile__add-button");
const newCardCloseButton = newCardPopup.querySelector(".popup__close");
const newCardSubmitForm = newCardPopup.querySelector(".popup__form");
const newCardSubmitButton = newCardPopup.querySelector(".popup__submit-button");

//Функции открытия попапов
function openPopup(popupObject) {
  popupObject.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscPress);
}

//Функции закрытия попапов
function closePopup(popupObject) {
  popupObject.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscPress);
}

//Передача данных из профиля в поля попапа
profileEditButton.addEventListener("click", function () {
  profileNameEditField.value = profileName.textContent;
  profileInfoEditField.value = profileInfo.textContent;
  openPopup(profileEditPopup);
});

//Функция отправления заполненной формы редактирования профиля
const profileEditFormHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameEditField.value;
  profileInfo.textContent = profileInfoEditField.value;
  closePopup(profileEditPopup);
};

profileCloseButton.addEventListener("click", () =>
  closePopup(profileEditPopup)
);
profileEditForm.addEventListener("submit", profileEditFormHandler);

function renderCard(data) {
  const cardInstance = new Card(data, ".card-template", photoZoomHandler);
  const card = cardInstance.generateCard();
  return card;
};

function addNewCard (cardListWrapper, card) {
  cardListWrapper.prepend(card);
};

function addOldCard (cardListWrapper, card) {
  cardListWrapper.append(card);
};

//Функция увеличения фото карточки
const photoZoomHandler = (link, name) => {
  zoomedImage.src = link;
  zoomedImage.alt = name;
  imageCaption.textContent = name;
  openPopup(imageZoomPopup);
};

//Отображение фотографий их массива
initialCards.forEach(item => {
  addOldCard(cardListWrapper, renderCard(item));
});

//Добавление новой карточки
const newCardSubmitFormHandler = (evt) => {
  evt.preventDefault();
  const newCard = {};
  newCard.name = newCardTitle.value;
  newCard.link = newCardLink.value;
  addNewCard(cardListWrapper, renderCard(newCard));
  closePopup(newCardPopup);
  newCardSubmitForm.reset();
  newCardSubmitButton.classList.remove("popup__submit-button_active");
};

//Слушатели для попапов
newCardCreateButton.addEventListener("click", () => openPopup(newCardPopup));
newCardCloseButton.addEventListener("click", () => closePopup(newCardPopup));
zoomedImageCloseButton.addEventListener("click", () =>
  closePopup(imageZoomPopup)
);
newCardSubmitForm.addEventListener("submit", newCardSubmitFormHandler);

//Закрытие попапов по клику на оверлей
const windowWithPopup = document.querySelectorAll(".popup");
windowWithPopup.forEach((popup) => {
  popup.addEventListener("mousedown", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(evt.target);
    }
  });
});

//Закрытие попапов по нажатию на Esc
const handleEscPress = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};

//Экземпляры класса FormValidator
const editProfileFormValidator = new FormValidator(validationConfig, profileEditPopup);
const newCardFormValidator = new FormValidator(validationConfig, newCardPopup);

newCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
