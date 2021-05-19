function Translate(word, language) {
  this.apiKey =
    "trnsl.1.1.20210518T143143Z.4bf6b398673151bb.98fb148e4634865016f8c6d3c8b786c2f6050857";
  this.word = word;
  this.language = language;

  //xhr obj.

  this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) {
  //ajax operations
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}`;
  this.xhr.open("GET", endpoint);

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText);
      const text = json.text[0];

      callback(null, text);
    } else {
      callback("an error accured", null);
    }
  };
  this.xhr.send();
};

Translate.prototype.changeParameters = function (newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
};
