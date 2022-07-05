/**управляет отображением информации о пользователе на странице */
export default class UserInfo {
  constructor({userNameSelector, aboutUserSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(aboutUserSelector);
  }
  /**возвращает объект с данными пользователя. Получает информацию о пользователе из разметки
   * Этот метод пригодится, когда данные пользователя нужно будет подставить в форму при открытии.*/
  getUserInfo() {
    this._userInfo = {
      name: this._userName.textContent,
      info: this._userAbout.textContent
    }
    return this._userInfo;
  };
  /** принимает новые данные пользователя и добавляет их на страницу*/
  setUserInfo(userInfo){
    this._userName.textContent = userInfo.name;
    this._userAbout.textContent = userInfo.info;
  };
}
