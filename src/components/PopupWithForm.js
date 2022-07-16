import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor( popupSelector, {setFormSubmitHandler: setFormSubmitHandler}) {
    super(popupSelector);
    this._setFormSubmitHandler = setFormSubmitHandler;
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

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  /** добавляет обработчик сабмита формы*/
  setEventListeners() {
   super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._setFormSubmitHandler(this._getInputValues());
    });
  }

  /**закрытии попапа + сброс формы */
  close() {
    super.close();
    this._popupForm.reset();
  };

  loading(isLoading, loadingText='Сохранение...') {
    if (isLoading) {
      this._popupButton.textContent = loadingText;
    } else {
      this._popupButton.textContent = this._buttonText;
    }
  }
}
