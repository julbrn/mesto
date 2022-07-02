/**Отвечает за отрисовку элементов на странице */
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector)
  }
  /**oтрисовка всех элементов*/
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    })
  };
  /**принимает DOM-элемент и добавляет его в контейнер */
  addItem(domElement) {
    this._container.prepend(domElement);
  }
}
