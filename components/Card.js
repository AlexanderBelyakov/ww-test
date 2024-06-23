export class Card {
  constructor({ data }, cardTemplateSelector) {
    this._cardName = data.name;
    this._cardImage = data.image;
    this._cardSpecies = data.species;
    this._cardStatus = data.status;
    this._cardLocation = data.location.name;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getCard() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = this._getCard();
    this._name = this._element.querySelector(".card__name");
    this._name.textContent = this._cardName;
    this._image = this._element.querySelector(".card__image");
    this._image.src = this._cardImage;
    this._image.alt = this._cardName;
    this._status = this._element.querySelector(".card__status");
    this._status.textContent = this._cardStatus;
    this._species = this._element.querySelector(".card__species");
    this._species.textContent = this._cardSpecies;
    this._location = this._element.querySelector(".card__location");
    this._location.textContent = this._cardLocation;
    return this._element;
  }
}
