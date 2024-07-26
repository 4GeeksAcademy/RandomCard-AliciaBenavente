/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generatedCard();
};
function generatedCard() {
  let selectedSuit = randomSuit();

  document.querySelectorAll(".suit").forEach(suit => {
    suit.innerHTML = selectedSuit;
    if (selectedSuit === "♥" || selectedSuit === "♦") {
      suit.classList.add("red");
    } else {
      suit.classList.remove("red");
    }
  });
  document.querySelector("#number").innerHTML = randomNumber();
}
let randomNumber = function generateRandomNumber() {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomNumber = Math.floor(Math.random() * number.length);
  return number[randomNumber];
};

let randomSuit = function generateRandomSuit() {
  let suit = ["♥", "♦", "♠", "♣"];
  let randomSuit = Math.floor(Math.random() * suit.length);

  return suit[randomSuit];
};

button.addEventListener("click", function() {
  generatedCard();
});

let card = document.querySelector(".card");

let widthButton = document.getElementById("changeWidth");
widthButton.addEventListener("click", () => {
  let getWidthInput = document.getElementById("widthInput").value.trim();
  card.style.setProperty("width", getWidthInput);
});
let heightButton = document.getElementById("changeHeight");
heightButton.addEventListener("click", () => {
  let getHeightInput = document.getElementById("heightInput").value.trim();
  card.style.setProperty("height", getHeightInput);
});
