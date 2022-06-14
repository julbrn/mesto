//Открытие попапов
export function openPopup(popupObject) {
  popupObject.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscPress);
}

//Закрытие попапов
export function closePopup(popupObject) {
  popupObject.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscPress);
}

//Закрытие попапов по Esc
export const handleEscPress = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};
