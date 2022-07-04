export default class FormValidator {
  constructor(config, form) {
    (this._inputSelector = config.inputSelector),
      (this._submitButtonSelector = config.submitButtonSelector),
      (this._activeButtonClass = config.activeButtonClass),
      (this._inputErrorClass = config.inputErrorClass),
      (this._errorClass = config.errorClass),
      (this._form = form);
    this._buttonElement = this._form.querySelector(
      `.${this._submitButtonSelector}`);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._buttonElement.classList.remove(this._activeButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.add(this._activeButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  enableValidation() {
    const inputList = Array.from(
      this._form.querySelectorAll(`.${this._inputSelector}`)
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList);
      });
    });
  }

  /**Убирает ошибки при новом открытии формы*/
  setDefaultInputState() {
    const inputList = Array.from(
      this._form.querySelectorAll(`.${this._inputSelector}`)
    );
    inputList.forEach((input) => {
      this._checkInputValidity(input);
      this._hideInputError(input);
    });
  }
}
