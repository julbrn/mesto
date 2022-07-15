export default class Card {
  constructor({data, isLiked, isMine, handleCardClick, handleDeleteButton, handleLikeButton}, cardTemplateSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
   // this._cardId = data._id; /** это id самой карточки */
    this._userId = userId; /**  это id пользователя профиля */
   // this._cardOwnerId = data.owner._id ; /** а это id владельца карточки */
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeButton = handleLikeButton;
   // this._isLiked = isLiked;
   // this._isMine = isMine;
  }

  /**Возвращение шаблона карточки (DOM)*/
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }
  // проверка наличия моих лайков
  _checkLikeOwner(item) {
    if (this._likesCallback(item)) {
      this._likesNumber.classList.add("card__like-button_active");
    } else {
      this._likesNumber.classList.remove("card__like-button_active");
    }
  }

  // проверка количества и постановка лайков
  setLikes(item) {
    this._likesNumber.textContent = item.likes.length;
    this._checkLikeOwner(item);
    if (this._likesNumber.textContent > 0) {
      this._likesNumber.classList.add("card__like-button_active");
    } else {
      this._likesNumber.classList.remove("card__like-button_active");
    }
  }

  /**Публичный метод создания карточки, слушатели на кнопки*/
  generateCard = () => {
    this._card = this._getTemplate();
    this._cardDeleteButton = this._card.querySelector('.card__delete-button');
    this._cardTitle = this._card.querySelector(".card__title");
    this._cardPhoto = this._card.querySelector(".card__photo");
    this._deleteButton = this._card.querySelector(".card__delete-button");
    this._likeButton = this._card.querySelector(".card__like-button");
    this._likesNumber = this._card.querySelector(".card__like-counter");
    this._setEventListeners();
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._cardTitle.textContent = this._name;
    /** Сравниваем owner._id (в карточке на сервере) с id пользователя профиля */
    if (this._cardOwnerId !== this._userId) {
      this._cardDeleteButton.remove();
      this._cardDeleteButton = null;
    }
    return this._card;
  };

  /**Слушатели для кнопок карточки*/
  _setEventListeners = () => {
    /**лайк*/
    this._likeButton.addEventListener("click", this._likeButtonHandler);
    /**корзина*/
    this._deleteButton.addEventListener("click", this._handleDeleteButton);
    /**увеличение карточки*/
    this._cardPhoto.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  };

  /**Функция постановки и снятия лайка*/
  _likeButtonHandler = () => {
    this._likeButton.classList.toggle("card__like-button_active");
  };

  /**Функция удаления карточки*/
   deleteCard = () => {
    this._card.remove();
    this._card = null;
  };
}
