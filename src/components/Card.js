export default class Card {
  constructor({data, userId, handleCardClick, handleDeleteButton, likeCard, unlikeCard}, cardTemplateSelector) {
    this.data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId; /**  это id пользователя профиля */
    this._handleDeleteButton = handleDeleteButton;
    this._likeCard = likeCard;
    this._unlikeCard = unlikeCard;

  }

  /**Возвращение шаблона карточки (DOM)*/
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  // сравнение id владельца карточки с id пользователя
  _isMyCard() {
    return (this.data.owner._id === this._userId)
  }
  // сравнение id поставившего лайк с id пользователя
  _checkLikeOwner() {
    this.data.likes.forEach((likeOwner) => {
      if (likeOwner._id === this._userId) {
        this.addLikeClass();
      }
    })
  }

  addLikeClass() {
    this._likeButton.classList.add('card__like-button_active')
  }

  removeLikeClass() {
    this._likeButton.classList.remove('card__like-button_active')
  }

  _setLike(data) {
    this._likeCard(data);
  }

  _removeLike(data) {
    this._unlikeCard(data);
  }

  /**счётчик лайков (ноль не отображается)*/
  setLikesCount(data) {
    if (data.likes.length === 0){this._likesNumber.textContent = null}
    else {this._likesNumber.textContent = data.likes.length}
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
    this.setLikesCount(this.data);
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._checkLikeOwner();
    /** Сравнение owner._id (в карточке на сервере) с id пользователя профиля и удаление значка
     *  корзины*/
    if (!this._isMyCard()) {
      this._cardDeleteButton.remove();
      this._cardDeleteButton = null;
    }
    return this._card;
  };

  /**Слушатели для кнопок карточки*/
  _setEventListeners = () => {
    /*лайк*/
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains('card__like-button_active')) {
        this._removeLike()
      } else {
        this._setLike()
      }
    });
    /**корзина*/
    this._deleteButton.addEventListener("click", this._handleDeleteButton);
    /**увеличение карточки*/
    this._cardPhoto.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  };

  /**Функция удаления карточки*/
   deleteCard = () => {
    this._card.remove();
    this._card = null;
  };
}
