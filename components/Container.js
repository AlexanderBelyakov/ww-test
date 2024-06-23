export class Container {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  deleteItem() {
    this._container.innerHTML = "";
  }

  addItem(element) {
    this._container.append(element);
  }
}
