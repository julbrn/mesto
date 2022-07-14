import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor( popupSelector, {formSubmitHandler}) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    this._popupButton = this._popupForm.querySelector('.popup__submit-button');
    this._buttonText = this._popupButton.textContent;
  }
  /**собирает данные всех полей формы  и убирает пробелы*/
  _getInputValues() {
    this._newValues = {};
    this._inputList.forEach((inputItem) => {
      this._newValues[inputItem.name] = inputItem.value.trim();
    })
    return this._newValues;
  };

  /** добавляет обработчик сабмита формы*/
  setEventListeners() {
   super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
    });
  }

  /**закрытии попапа + сброс формы */
  close() {
    super.close();
    this._popupForm.reset();
  };

  loading(isLoading) {
    if (isLoading) {
      this._popupButton.textContent = 'Сохранение...';
    } else {
      this._popupButton.textContent = this._buttonText;
    }
  }
}
