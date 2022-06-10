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
const cardTemplate = document.querySelector(".card-template").content;

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

//Функция постановки и снятия лайка
const likeButtonHandler = (evt) => {
  evt.target.classList.toggle("card__like-button_active");
};

//Функция удаления карточки
const deleteButtonHandler = (evt) => {
  evt.target.closest(".card").remove();
};

//Создание карточки, слушатели на кнопки
const createCard = (cardData) => {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = card.querySelector(".card__title");
  const cardPhoto = card.querySelector(".card__photo");
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  likeButton.addEventListener("click", likeButtonHandler);
  deleteButton.addEventListener("click", deleteButtonHandler);
  cardPhoto.src = cardData.link;
  cardPhoto.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardPhoto.addEventListener("click", () => {
    photoZoomHandler(cardData);
  });
  return card;
};

const renderCard = (card) => {
  cardListWrapper.append(card);
};

const addCard = (card) => {
  cardListWrapper.prepend(card);
};

//Функция увеличения фото карточки
const photoZoomHandler = (image) => {
  zoomedImage.src = image.link;
  zoomedImage.alt = image.name;
  imageCaption.textContent = image.name;
  openPopup(imageZoomPopup);
};

//Отображение фотографий их массива
initialCards.forEach(function (item) {
  const oldCard = createCard(item);
  renderCard(oldCard);
});

//Добавление новой карточки
const newCardSubmitFormHandler = (evt) => {
  evt.preventDefault();
  const newCard = createCard({
    name: newCardTitle.value,
    link: newCardLink.value,
  });
  addCard(newCard);
  closePopup(newCardPopup);
  newCardSubmitForm.reset();
  newCardSubmitButton.classList.remove("popup__submit-button_active");
};

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

//Закрытие попаов по нажатию на Esc
const handleEscPress = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};
