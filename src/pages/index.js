import './index.css';
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  addImageButton,
  newCardSubmitForm,
  profileEditButton,
  profileEditSubmitForm,
  validationConfig,
  inputUserName,
  inputUserInfo,
  token,
  server
} from "../utils/Constants.js";
import FormValidator from "../components/FormValidator.js";
//import PopupWithConfirmation from "../components/PopupWithConfirmation";

/** Подключить API */
const api = new Api({
  serverUrl: server,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
    userId = data._id;
    userInfo.setUserInfo(data);
    initialCardList.renderItems(cards);
  })
  .catch((err) => console.log(err))
  .finally(() => {})

/** Создает новую секцию для карочки*/
const initialCardList = new Section({
  renderer: (data) => {
  initialCardList.addItem(createCard(data));
},
  }, '.elements__cards'
)

/** Экземпляр профиля пользователя*/
const userInfo = new UserInfo(
  {
    userNameSelector: '.profile__title',
    aboutUserSelector: '.profile__subtitle',
    avatarSelector: '.profile__avatar',
  }
);

/** Экземпляр формы редактирования профиля */
const profileEditPopup = new PopupWithForm('.popup_type_edit-profile', (inputValues) => {
  profileEditPopup.loading('Сохранение...')
    api.setUserInfo(inputValues)
    .then((data) => {
      userInfo.setUserInfo(data);
      profileEditPopup.close();
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      profileEditPopup.loading(false);
    })
});

profileEditPopup.setEventListeners();

/** Создаёт экземпляр формы добавления карточки */
const newCardPopup = new PopupWithForm(
  '.popup_type_add-card', (inputData) => {
    newCardPopup.loading('Сохранение...');
    api.postCard(inputData)
      .then((data) => {
        initialCardList.addItem(createCard(data));
        newCardPopup.close();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        newCardPopup.loading(false);
      })
     newCardPopup.close();
  });

newCardPopup.setEventListeners();
/*
const confirmationPopup = new PopupWithConfirmation(
  '.popup_type_deletion-confirmation',
  {
    formSubmitHandler: () => {
      confirmationPopup.close();
    }
  });

confirmationPopup.setEventListeners();*/

/** Создаёт экземпляр попапа с увеличением изображения */
const imageZoomPopup = new PopupWithImage('.popup_type_zoom-image');
imageZoomPopup.setEventListeners();

/**Создаёт экземпляры карточек */
function createCard(data) {
  const cardInstance = new Card({
    data: data,
    handleCardClick:  () => {imageZoomPopup.open(data)}
  }, ".card-template", api, userId);
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
/*
deleteCardButton.addEventListener('click', () => {
  confirmationPopup.open();
});
*/
