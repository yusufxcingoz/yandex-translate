eventListeners();

function eventListeners() {
  document
    .getElementById("translate-form")
    .addEventListener("submit", translateWord);

  //change
  document.getElementById("language").onchange = function () {
    // ui işlemleri
    ui.changeUI();
  };
}

const translate = new Translate(
  document.getElementById("word").value,
  document.getElementById("language").value
);
const ui = new UI();

const lang = document.getElementById("language");

const output = document.getElementById("outputWord");
const outputImg = document.getElementById("outputImage");

function translateWord(e) {
  translate.changeParameters(
    document.getElementById("word").value,
    document.getElementById("language").value
  );
  translate.translateWord(function (err, response) {
    if (err) {
      //response
      console.log(err);
    } else {
      output.innerText = response;
    }
  });
  e.preventDefault();
}
