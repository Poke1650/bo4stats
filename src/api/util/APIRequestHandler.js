class APIRequestHandler {
  /**
   * Query the given url and return a promise with the data in json
   * @param {string} url the url to query
   */
  static query(url) {
    return fetch(url).then(res => res.json());
  }

  /**
   * Post JSON data to a given URL
   * @param {string} url the url to post to
   * @param {json} body Json objet to post
   */
  static post(url, body) {
    return fetch(url, { method: "POST", body: JSON.stringify(body) }).then(
      res => res.json()
    );
  }
}

export default APIRequestHandler;
