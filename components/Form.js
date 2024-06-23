export class Form {
  constructor(formSelector, submitForm) {
    this._submitForm = submitForm;
    this._form = document.querySelector(formSelector);
    this._input = document.querySelector(".content__input");
    this._submitButton = document.querySelector(".content__button");
  }

  _getInputValue() {
    this._returnedValue = this._input.value;
    return this._returnedValue;
  }

  setEventListener() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValue());
    });
  }
}
