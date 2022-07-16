/*export const initialCards = [
  {
    name: 'Pear',
    link: 'https://images.unsplash.com/photo-1421167418805-7f170a738eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Gin & Pomegranate',
    link: 'https://images.unsplash.com/photo-1608885898599-4dadfdceec60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Figs',
    link: 'https://images.unsplash.com/photo-1629911620065-d23e79bec7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    name: 'Cup with strawberries',
    link: 'https://images.unsplash.com/photo-1613421341356-33c6452f082f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    name: 'Oranges',
    link: 'https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Autumn vibes',
    link: 'https://images.unsplash.com/photo-1634738442108-de3e34983c5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];*/

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  activeButtonClass: "popup__submit-button_active",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

/**Переменные для попапа редактирования профиля*/
export const editPopup = document.querySelector(".popup_type_edit-profile");
export const profileEditSubmitForm = editPopup.querySelector(".popup__form");
export const profileEditButton = document.querySelector(".profile__edit-button");

/**Переменные для попапа создания новой карточки*/
export const addPopup = document.querySelector(".popup_type_add-card");
export const newCardSubmitForm = addPopup.querySelector(".popup__form");
export const addImageButton = document.querySelector(".profile__add-button");

/**Переменные для попапа подтверждения удаления*/
export const deleteCardPopup = document.querySelector(".popup_type_deletion-confirmation");
export const deleteCardButton = deleteCardPopup.querySelector(".card__delete-button");

/**Переменные для авторизации на сервере*/
export const token = '1133b8bd-97d0-4ecb-ab73-7c32b64892f8';
export const server = 'https://mesto.nomoreparties.co/v1/cohort-45';

/**Переменные для редактирования аватара*/
export const avatarPopup = document.querySelector(".popup_type_edit-avatar");
export const avatarEditButton = document.querySelector('.profile__edit-avatar-button');
export const avatarEditSubmitForm= avatarPopup.querySelector('.popup__form');
