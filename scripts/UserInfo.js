/**отвечает за управление отображением информации о пользователе на странице */
export default class UserInfo {
  constructor(nameSelector, infoSelector) {}
  /**возвращает объект с данными пользователя.
   * Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.*/
  getUserInfo;
  /** принимает новые данные пользователя и добавляет их на страницу*/
  setUserInfo;
}
