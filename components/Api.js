export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getCardsByName(query) {
    return fetch(this._baseUrl + "/character/?name=" + query, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}
