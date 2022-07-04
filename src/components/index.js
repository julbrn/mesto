import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import {
  addImageButton,
  initialCards,
  newCardSubmitForm,
  profileEditButton,
  profileEditSubmitForm,
  validationConfig,
  inputUserName,
  inputUserInfo
} from "./Constants.js";
import FormValidator from "./FormValidator.js";

/** Создает новую секцию в списке карточек*/
const initialCardList = new Section({
  items: initialCards.reverse(),
  renderer: (data) => {
  initialCardList.addItem(createCard(data));
},
  }, '.elements__cards'
)

initialCardList.renderItems()

/** Экземпляр профиля пользователя*/
const userInfo = new UserInfo ('.profile__title', '.profile__subtitle');

/** Экземпляр формы редактирования профиля */
const profileEditPopup = new PopupWithForm('.popup_type_edit-profile', {
  formSubmitHandler: (inputData) => {
    profileEditPopup.close();
    userInfo.setUserInfo(inputData);
  }
});

profileEditPopup.setEventListeners();

/** Создаёт экземпляр формы добавления карточки */
const newCardPopup = new PopupWithForm(
  '.popup_type_add-card',
  {
    formSubmitHandler: (inputData) => {
      initialCardList.addItem(createCard(inputData));
      newCardPopup.close();
    }
  });

newCardPopup.setEventListeners();

/**Передача данных из профиля в поля попапа*/
/*profileEditButton.addEventListener("click", function () {
  profileNameEditField.value = profileName.textContent;
  profileInfoEditField.value = profileInfo.textContent;
  openPopup(profileEditPopup);
});*/

/**Функция отправления заполненной формы редактирования профиля*/
/*const profileEditFormHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameEditField.value;
  profileInfo.textContent = profileInfoEditField.value;
  closePopup(profileEditPopup);
};

/**Слушатели для попапов*/
/*
newCardCreateButton.addEventListener("click", () => {
  newCardFormValidator.disableSubmitButton();
  openPopup(newCardPopup);
});
newCardCloseButton.addEventListener("click", () => closePopup(newCardPopup));
zoomedImageCloseButton.addEventListener("click", () =>
  closePopup(imageZoomPopup)
);
newCardSubmitForm.addEventListener("submit", newCardSubmitFormHandler);*/

/** Создаёт экземпляр попапа с увеличением изображения */
const imageZoomPopup = new PopupWithImage('.popup_type_zoom-image');
imageZoomPopup.setEventListeners();
/**Создаёт экземпляры карточек */
function createCard(data) {
  const cardInstance = new Card({
    data: data,
    handleCardClick:  () => {imageZoomPopup.open(data)}
  }, ".card-template");
  return cardInstance.generateCard();
}

/**Экземпляры класса FormValidator*/
const editProfileFormValidator = new FormValidator(
  validationConfig,
  profileEditSubmitForm
);
const newCardFormValidator = new FormValidator(validationConfig, newCardSubmitForm);

newCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();

profileEditButton.addEventListener('click', () => {
  const userValues = userInfo.getUserInfo();
  inputUserName.value = userValues.name;
  inputUserInfo.value = userValues.info;
  editProfileFormValidator.setDefaultInputState(profileEditPopup);
  profileEditPopup.open();
});

addImageButton.addEventListener('click', () => {
  newCardPopup.open();
});

