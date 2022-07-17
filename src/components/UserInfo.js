/**управляет отображением информации о пользователе на странице */
export default class UserInfo {
  constructor({userNameSelector, aboutUserSelector, avatarSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(aboutUserSelector);
    this._userAvatar = document.querySelector(avatarSelector);
    this._userInfo = {};
  }
  /**возвращает объект с данными пользователя. Получает информацию о пользователе из разметки
   * Этот метод пригодится, когда данные пользователя нужно будет подставить в форму при открытии.*/
  getUserInfo() {
    this._userInfo['profileName'] = this._userName.textContent;
    this._userInfo['profileInfo'] = this._userAbout.textContent;
    return this._userInfo;
  };
  /** принимает новые данные пользователя и добавляет их на страницу*/
  setUserInfo({name, about, avatar, _id}){
    this._userName.textContent = name;
    this._userAbout.textContent = about;
    this._userAvatar.src = avatar;
  };

  setAvatar({avatar, _id}) {
    this._userAvatar.src = avatar;
  }
}
