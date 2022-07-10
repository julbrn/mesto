/**управляет отображением информации о пользователе на странице */
export default class UserInfo {
  constructor({userNameSelector, aboutUserSelector, avatarSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(aboutUserSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }
  /**возвращает объект с данными пользователя. Получает информацию о пользователе из разметки
   * Этот метод пригодится, когда данные пользователя нужно будет подставить в форму при открытии.*/
  getUserInfo() {
    this._userInfo = {
      name: this._userName.textContent,
      about: this._userAbout.textContent
    }
    return this._userInfo;
  };
  /** принимает новые данные пользователя и добавляет их на страницу*/
  setUserInfo(data){
    this._userName.textContent = data.name;
    this._userAbout.textContent = data.about;
    this.setAvatar(data);
  };
  setAvatar(data) {
    this._userAvatar.src = data.avatar;
  }
}
