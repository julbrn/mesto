let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__title');
let profilePersonalInfo = document.querySelector('.profile__subtitle');
let editName = document.querySelector('.popup__input_type_name');
let editPersonalInfo = document.querySelector('.popup__input_type_personal-info');
let editForm = document.querySelector('.popup__form');

function openPopup() {
  popup.classList.add("popup_opened");
  editName.value = profileName.textContent;
  editPersonalInfo.value = profilePersonalInfo.textContent;
};

function closePopup() {
  popup.classList.remove("popup_opened");
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profilePersonalInfo.textContent = editPersonalInfo.value;
  closePopup();
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
editForm.addEventListener('submit', formSubmitHandler);

//Архив карточек
const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/elements/Karachaevsk.jpg'
  },
  {
    name: 'Бермамыт',
    link: './images/elements/Bermamyt_Plateau1.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elements/Elbrus.jpg'
  },
  {
    name: 'Гора Машук',
    link: './images/elements/Mount_Mashuk1.jpg'
  },
  {
    name: 'Ущелье Птыш',
    link: './images/elements/Chuchkhur_waterfall1.jpg'
  },
  {
    name: 'Домбай',
    link: './images/elements/Dombai.jpg'
  }
];

const likeButtonHandler = (evt) => {
  evt.target.classList.toggle('card__like-button_active');
}

const cards = document.querySelector('.elements__cards');

initialCards.forEach(({link, name}) => {
  const template = document.querySelector('.card-template').content.querySelector('.card').cloneNode(true);
  const cardTitle = template.querySelector('.card__title');
  const cardPhoto = template.querySelector('.card__photo');
  const deleteButton = template.querySelector('.card__remove-button');
  const likeButton = template.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeButtonHandler);
  cardPhoto.src = link;
  cardPhoto.alt = name;
  cards.append(template);
});







