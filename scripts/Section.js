/**Отвечает за отрисовку элементов на странице */
export default class Section {
  constructor({ items, renderer }, containerSelector) {}
  /**oтрисовка каждого отдельного элемента */
  _renderer;
  /**oтрисовка всех элементов Название сменить*/
  renderElements;
  /**принимает DOM-элемент и добавляет его в контейнер */
  addItem;
}
