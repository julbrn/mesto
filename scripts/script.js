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


