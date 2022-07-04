import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor( popupSelector, {formSubmitHandler}) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
  }
  /**собирает данные всех полей формы*/
  _getInputValues() {
    this._newValues = {};
    this._inputList.forEach((inputItem) => {
      this._newValues[inputItem.name] = inputItem.value;
    })
    return this._newValues;
  };

  /**не только добавляет обработчик клика иконке закрытия, но и добавляет обработчик сабмита формы*/
  setEventListeners() {
   super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
      this.close();
    });
  }

  /**закрытии попапа + сброс формы */
  close() {
    super.close();
    this._popupForm.reset();
  };
}
