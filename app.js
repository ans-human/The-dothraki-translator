var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-txt");
var outputTxt = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getconvertedURL(input) {
    return serverURL + "?text=" + input;
};

function errorHandler() {
    console.log("ERROR:", error);
    alert("Something went wrong with server :( . Try again later.")
};

function clickHandler() {
    var input = inputTxt.value;
    console.log(input);

    fetch(getconvertedURL(input))
        .then(response => response.json())
        .then(json => {
            var translation = json.contents.translated;
            outputTxt.innerText = translation;
        })
        .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);