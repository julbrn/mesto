import './index.css';
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  addImageButton,
  initialCards,
  newCardSubmitForm,
  profileEditButton,
  profileEditSubmitForm,
  validationConfig,
  inputUserName,
  inputUserInfo
} from "../utils/Constants.js";
import FormValidator from "../components/FormValidator.js";

/** Создает новую секцию для карочки*/
const initialCardList = new Section({
  items: initialCards.reverse(),
  renderer: (data) => {
  initialCardList.addItem(createCard(data));
},
  }, '.elements__cards'
)

initialCardList.renderItems()

/** Экземпляр профиля пользователя*/
const userInfo = new UserInfo(
  {
    userNameSelector: '.profile__title',
    aboutUserSelector: '.profile__subtitle',
  }
);

/** Экземпляр формы редактирования профиля */
const profileEditPopup = new PopupWithForm('.popup_type_edit-profile', {
  formSubmitHandler: (inputValues) => {
    userInfo.setUserInfo(inputValues);
    profileEditPopup.close();
  }});

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

/**слушатель для кнопки редактирования профиля*/
profileEditButton.addEventListener('click', () => {
  const userValues = userInfo.getUserInfo();
  inputUserName.value = userValues.name;
  inputUserInfo.value = userValues.about;
  editProfileFormValidator.setDefaultInputState(profileEditPopup);
  profileEditPopup.open();
});
/**слушатель для кнопки добавления новой карточки*/
addImageButton.addEventListener('click', () => {
  newCardFormValidator.setDefaultInputState(newCardPopup);
  newCardPopup.open();
});

