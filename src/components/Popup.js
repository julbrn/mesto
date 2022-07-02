/**отвечает за открытие и закрытие попапа */
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close');
    this._openedPopupClass = this._popup.querySelector('.popup_opened');
  }

  /**открытие попапа*/
  open() {
    this._popupSelector.classList.add(this._openedPopupClass);
    document.addEventListener("keydown", this._handleEscClose);
  };

  /**закрытие попапа*/
  close() {
    this._popupSelector.classList.remove(this._openedPopupClass);
    document.removeEventListener("keydown", this._handleEscClose);
  };

  /**закрытие попапа по Esc*/
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  /**закрытие попапа по Esc*/
  _handleOverlayClick(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }

  /**слушатели клика для кнопки закрытия попапа и оверлея*/
  setEventListeners() {
      this._popupCloseButton.addEventListener('click', () => this.close());
      this._popup.addEventListener("mousedown", (evt) => this._handleOverlayClick(evt));}
}
