import './index.css';
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import {
  addImageButton,
  newCardSubmitForm,
  profileEditButton,
  profileEditSubmitForm,
  validationConfig,
  token,
  server,
  avatarEditButton,
  avatarEditSubmitForm
} from "../utils/Constants.js";
import FormValidator from "../components/FormValidator.js";

/** Подключить API */
const api = new Api({
  serverUrl: server,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

/** Экземпляр профиля пользователя*/
const userInfo = new UserInfo(
  {
    userNameSelector: '.profile__title',
    aboutUserSelector: '.profile__subtitle',
    avatarSelector: '.profile__avatar',
  }
);

let userId;

/**Получаем данные пользователя и карточки с сервера, рендерим их*/
Promise.all([api.downloadUserInfo(), api.downloadInitialCards()])
  .then(([me, cards]) => {
    userId = me._id;
    userInfo.setUserInfo(me);
    initialCardList.renderItems(cards);
  })
  .catch((err) => console.log(err))

/** Создает новую секцию для карочки*/
const initialCardList = new Section({
  renderer: (data) => {
  initialCardList.addItem(createCard(data));
},
  }, '.elements__cards'
)

/** Экземпляр формы редактирования профиля */
const profileEditPopup = new PopupWithForm('.popup_type_edit-profile', {formSubmitHandler: (inputValues) => {
  profileEditPopup.loading(true);
    api.uploadUserInfo(inputValues)
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
}});

/** вешает на попап редактирования профиля обработчик сабмита формы (данные ввода попадают в
 *  хэндлер) */
profileEditPopup.setEventListeners();

/** Экземпляр формы добавления карточки */
const newCardPopup = new PopupWithForm(
  '.popup_type_add-card', {formSubmitHandler: (inputData) =>
{
  newCardPopup.loading(true);
  api.uploadCard(inputData)
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
}});

/** вешает на попап добавления новой карточки обработчик сабмита формы (данные ввода попадают в
 *  хэндлер) */
newCardPopup.setEventListeners();

/** Экземпляр формы изменения аватара */
const avatarEditPopup = new PopupWithForm('.popup_type_edit-avatar', {formSubmitHandler: (data) => {
    avatarEditPopup.loading(true);
    api.editAvatar(data)
      .then ((data) => {
        userInfo.setAvatar(data);
        avatarEditPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarEditPopup.loading(false);
      })

  }});

/** вешает на попап редактирования аватара обработчик сабмита формы (данные ввода попадают в
 *  хэндлер) */
avatarEditPopup.setEventListeners();

/**экземпляр формы подтверждения удаления карточки*/
const deletionConfirmationPopup = new PopupWithConfirmation(
  '.popup_type_deletion-confirmation',
  {
    formSubmitHandler: () => {
      deletionConfirmationPopup.close();
    }
  });

/** вешает на попап подтверждения удаления карточки обработчик сабмита формы */
deletionConfirmationPopup.setEventListeners();

/**экземпляр попапа с увеличением изображения */
const imageZoomPopup = new PopupWithImage('.popup_type_zoom-image');
imageZoomPopup.setEventListeners();

/**экземпляры карточек */
function createCard(data) {
  const cardInstance = new Card({
    data: data,
    userId: userId,
    handleCardClick:  () => {imageZoomPopup.open(data);
      console.log(data);},
    handleDeleteButton: () => {
      deletionConfirmationPopup.setSubmitHandler(() => {
      deletionConfirmationPopup.loading(true);
      api. deleteCardfromServer(data._id)
        .then(() => {
          cardInstance.deleteCard();
          deletionConfirmationPopup.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          deletionConfirmationPopup.loading(false);
        })
      });
      deletionConfirmationPopup.open();},
    likeCard: () => {
      api.sendCardLike(data)
        .then((data) => {
          cardInstance.addLikeClass();
          cardInstance.setLikesCount(data);
        })
        .catch((err => {
          console.log(err);
        }))
    },
    unlikeCard: () => {
      api.deleteCardLike(data)
        .then((data) => {
          cardInstance.removeLikeClass();
          cardInstance.setLikesCount(data);
        })
        .catch((err => {
          console.log(err);
        }))
    }
  }, ".card-template", userId);
  return cardInstance.generateCard();
}

/**Экземпляры класса FormValidator*/
const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')
    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);

/**слушатель для кнопки редактирования профиля*/
profileEditButton.addEventListener('click', () => {
  const userValues = userInfo.getUserInfo();
  profileEditPopup.setInputValues(userValues);
  formValidators['profileEditForm'].setDefaultInputState();
  profileEditPopup.open();
});
/**слушатель для кнопки добавления новой карточки*/
addImageButton.addEventListener('click', () => {
  formValidators['newCardForm'].setDefaultInputState();
  newCardPopup.open();
});

avatarEditButton.addEventListener('click', () => {
  formValidators['avatarEditForm'].setDefaultInputState();
  avatarEditPopup.open()});
