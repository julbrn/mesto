import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, {submitHandler}) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._popupForm = this._popup.querySelector('.popup__form');
  }
  /**собирает данные всех полей формы*/
  _getInputValues() {};

  /**не только добавляет обработчик клика иконке закрытия, но и добавляет обработчик сабмита формы*/
  setEventListeners() {;
   super.setEventListeners();}
  /**закрытии попапа + сброс формы */
  close() {
    super.close();
    this._popupForm.reset();
  };
}
