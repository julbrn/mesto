import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupButton = this._popupForm.querySelector('.popup__submit-button ');
    this._buttonText = this._popupButton.textContent;
  }

  setSubmitHandler(action) {
    this._setSubmitHandler = action;
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._setSubmitHandler();
    });
  }

  /**отображение процесса загрузки в тексте кнопок */
  loading(isLoading) {
    if (isLoading) {
      this._popupButton.textContent = 'Удаление...';
    } else {
      this._popupButton.textContent = this._buttonText;
    }
  }
}

