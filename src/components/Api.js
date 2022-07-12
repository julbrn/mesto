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

  downloadInitialCards() {
    return fetch(`${this._serverUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkServerResponse);
  }

  uploadCard(data) {
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

  deleteCardfromServer(id) {
    return fetch(`${this._serverUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkServerResponse);
  }

  sendCardLike(id) {
    return fetch(`${this._serverUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._checkServerResponse);
  }

  deleteCardLike(id) {
    return fetch(`${this._serverUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkServerResponse)
  }

  downloadUserInfo() {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkServerResponse);
  }

  uploadUserInfo(userData) {
    return fetch(`${this._serverUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.profileName,
        about: userData.profileInfo
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
