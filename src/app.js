/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generatedCard();
  setInterval(generatedCard, 5000);
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
  let getWidthInput = document.getElementById("widthInput").value;
  if (getWidthInput < "150") {
    alert("Please set a value above 150");
  } else {
    card.style.width = getWidthInput + "px";
  }
  document.getElementById("widthInput").value = "";
});

let heightButton = document.getElementById("changeHeight");
heightButton.addEventListener("click", () => {
  let getHeightInput = document.getElementById("heightInput").value;
  if (getHeightInput < "450") {
    alert("Please set a value above 450");
  } else {
    card.style.height = getHeightInput + "px";
  }
  document.getElementById("heightInput").value = "";
});
