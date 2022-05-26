//Переменные для попапа редактирования профиля
const popup = document.querySelector('.popup');
const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profileEditPopup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__title');
let profilePersonalInfo = document.querySelector('.profile__subtitle');
let editName = profileEditPopup.querySelector('.popup__input_type_name');
let editPersonalInfo = profileEditPopup.querySelector('.popup__input_type_personal-info');
let profileEditForm = profileEditPopup.querySelector('.popup__form');

//Переменные для попапа увеличения фотографии
const cards = document.querySelector('.elements__cards');
const ZoomImagePopup =  document.querySelector('.popup_type_zoom-image');
const zoomedImage = ZoomImagePopup.querySelector('.popup__image');
const imageCaption = ZoomImagePopup.querySelector('.popup__caption');
const closeZoomedImageButton = ZoomImagePopup.querySelector('.popup__close');


//Переменные для попапа создания новой карточки
const addNewCardPopup =  document.querySelector('.popup_type_add-card');
const newCardTitle = addNewCardPopup.querySelector('.popup__input_type_name');
const newCardLink = addNewCardPopup.querySelector('.popup__input_type_url');
const addNewCardButton = document.querySelector('.profile__add-button');
const closeNewCardButton = addNewCardPopup.querySelector('.popup__close');
const submitNewCardForm = addNewCardPopup.querySelector('.popup__form');

const initialCards = [
  {
    name: 'Blue poison dart frog',
    link: 'https://images.unsplash.com/photo-1591575930710-f88ddf08a52f?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
  },
  {
    name: 'Dressed up',
    link: 'https://images.unsplash.com/photo-1622348512579-73da9531493a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
  },
  {
    name: 'Hang in there',
    link: 'https://images.unsplash.com/photo-1634496188245-732e94b44c01?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688'
  },
  {
    name: 'Love is in the air',
    link: 'https://images.unsplash.com/photo-1625229167921-a7c5745e2596?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
  },
  {
    name: 'Bright side',
    link: 'https://images.unsplash.com/photo-1550853123-b81beb0b1449?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034'
  },
  {
    name: 'Underwater',
    link: 'https://images.unsplash.com/photo-1594294038873-6aa20dbda5f8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687'
  }
];

//Функции открытия попапов
function openPopup(popupObject) {
  popupObject.classList.add('popup_opened');
};

//Функции закрытия попапов
function closePopup(popupObject) {
  popupObject.classList.remove("popup_opened");
};


//Передача данных из профиля в поля попапа
profileEditButton.addEventListener('click', function () {
openPopup(profileEditPopup)
editName.value = profileName.textContent;
editPersonalInfo.value = profilePersonalInfo.textContent;
});

//Функция отправления заполненной формы редактирования профиля
const formSubmitHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profilePersonalInfo.textContent = editPersonalInfo.value;
  closePopup(profileEditPopup);
};

profileCloseButton.addEventListener('click', () => closePopup(profileEditPopup));
profileEditForm.addEventListener('submit', formSubmitHandler);

//Функция постановки и снятия лайка
const likeButtonHandler = (evt) => {
  evt.target.classList.toggle('card__like-button_active');
}

//Функция удаления карточки
const deleteButtonHandler = (evt) => {
  evt.target.closest('.card').remove();
}

//Создание карточки, слушатели на кнопки
createCard = (obj) => {
  const card = document.querySelector('.card-template').content.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardPhoto = card.querySelector('.card__photo');
  const deleteButton = card.querySelector('.card__delete-button');
  const likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeButtonHandler);
  deleteButton.addEventListener('click', deleteButtonHandler);
  cardPhoto.src = obj.link;
  cardPhoto.alt = obj.name;
  cardTitle.textContent = obj.name;
  cards.prepend(card);
  //Функция увеличения фото карточки
  const photoZoomHandler = () => {
    openPopup(ZoomImagePopup);
    zoomedImage.src = obj.link;
    imageCaption.textContent = obj.name;
  }
  cardPhoto.addEventListener('click', photoZoomHandler);
};

initialCards.forEach(createCard);

// Функция добавления новой карточки
const addNewCard = (evt) => {
  evt.preventDefault();
  createCard ({name: newCardTitle.value, link: newCardLink.value});
  closePopup(addNewCardPopup);
  evt.target(reset);
}

addNewCardButton.addEventListener('click', () => openPopup(addNewCardPopup));
closeNewCardButton.addEventListener('click', () => closePopup(addNewCardPopup));
closeZoomedImageButton.addEventListener('click', () => closePopup(ZoomImagePopup));
submitNewCardForm.addEventListener('submit', addNewCard);

