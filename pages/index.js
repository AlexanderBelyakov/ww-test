import { Api } from "../components/Api.js";
import { Form } from "../components/Form.js";
import { Card } from "../components/Card.js";
import { Container } from "../components/Container.js";

const api = new Api({
  baseUrl: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

function createCard(item) {
  const card = new Card({ data: item }, "#card-template");
  return card.createCard();
}

function addCard(item) {
  const cardElement = createCard(item);
  cardList.addItem(cardElement);
}

const cardList = new Container(
  {
    renderer: (item) => {
      addCard(item);
    },
  },
  ".content__container"
);

function findCharacters(req) {
  cardList.deleteItem();
  if (req) {
    api
      .getCardsByName(req)
      .then((cards) => {
        cards.results.forEach((element) => {
          addCard(element);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const searchForm = new Form(".content__form", findCharacters);

searchForm.setEventListener();
