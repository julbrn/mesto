import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  /**перезаписывает родительский метод open*/
  open(data) {
    this._popupImage.src = data.link;
    this._popupCaption.textContent = data.name;
    this._popupImage.alt = data.name;
    super.open();
  }
}
