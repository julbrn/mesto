export default class FormValidator {
  constructor(config, form) {
  /*  this._formSelector = config.formSelector,*/
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
/*const showInputError = (inputConfig) => {
  const {
    formElement,
    inputElement,
    errorMessage,
    inputErrorClass,
    errorClass,
  } = inputConfig;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
    showInputError({
      formElement,
      inputElement,
      errorMessage,
      inputErrorClass,
      errorClass,
    });
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, activeButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.remove(activeButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.add(activeButtonClass);
    buttonElement.disabled = false;
  }
};*/
/*
const setEventListeners = (formElement, someConfig) => {
  const {
    inputSelector,
    submitButtonSelector,
    inputErrorClass,
    errorClass,
    activeButtonClass,
  } = someConfig;
  const inputList = Array.from(
    formElement.querySelectorAll(`.${inputSelector}`)
  );
  const buttonElement = formElement.querySelector(`.${submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(inputList, buttonElement, activeButtonClass);
    });
  });
};*/
/*
const enableValidation = (someConfig) => {
  const { formSelector } = someConfig;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    setEventListeners(formElement, someConfig);
    });
};

enableValidation(validationConfig);*/
