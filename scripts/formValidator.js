export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector,
    this._submitButtonSelector = config.submitButtonSelector,
    this._activeButtonClass = config.activeButtonClass,
    this._inputErrorClass = config.inputErrorClass,
    this._errorClass = config.errorClass,
    this._form = form;
  }

  _showInputError(inputElement, errorMessage){
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement){
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity(inputElement){
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState(inputList, buttonElement){
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.remove(this._activeButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.add(this._activeButtonClass);
      buttonElement.disabled = false;
    }
  };

  enableValidation(){
    const inputList = Array.from(
      this._form.querySelectorAll(`.${this._inputSelector}`)
    );
    const buttonElement = this._form.querySelector(`.${this._submitButtonSelector}`);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

}
