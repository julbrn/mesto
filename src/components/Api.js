export default class Api {
  constructor({serverUrl, headers}) {
    this._headers = headers;
    this._serverUrl = serverUrl;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._serverUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkServerResponse);
  }

  postCard(data) {
    return fetch(`${this._serverUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._checkServerResponse);
  }

  deleteCard(id) {
    return fetch(`${this._serverUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkServerResponse);
  }

  likeCard(id) {
    return fetch(`${this._serverUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._checkServerResponse);
  }

  dislikeCard(id) {
    return fetch(`${this._serverUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkServerResponse)
  }

  getUserInfo() {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkServerResponse);
  }

  setUserInfo(userData) {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    })
      .then(this._checkServerResponse);
  }

  editAvatar(data) {
    return fetch (`${this._serverUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatarLink
      })
    })
      .then(this._checkServerResponse);
  }

}
