import "bootstrap";
import "./style.css";

const suits = [
  { symbol: "♠", color: "black" },
  { symbol: "♣", color: "black" },
  { symbol: "♥", color: "red" },
  { symbol: "♦", color: "red" }
];

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function drawCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("pokerCard");
  const topValue = document.getElementById("topValue");
  const cardSymbol = document.getElementById("cardSymbol");
  const bottomValue = document.getElementById("bottomValue");

  topValue.textContent = randomValue;
  cardSymbol.textContent = randomSuit.symbol;
  bottomValue.textContent = randomValue;

  card.className = "card";
  if (randomSuit.color === "red") {
    card.classList.add("red");
  }

  const widthInput = document.getElementById("cardWidth");
  const heightInput = document.getElementById("cardHeight");
  if (widthInput && heightInput) {
    card.style.width = widthInput.value + "px";
    card.style.height = heightInput.value + "px";
  }
}

window.onload = () => {
  const shuffleBtn = document.getElementById("shuffleBtn");
  drawCard();

  let countdown = 10;

  function updateButtonText() {
    shuffleBtn.textContent = `Barajar (${countdown})`;
  }

  shuffleBtn.addEventListener("click", () => {
    drawCard();
    countdown = 10;
    updateButtonText();
  });

  setInterval(() => {
    countdown--;
    if (countdown === 0) {
      drawCard();
      countdown = 10;
    }
    updateButtonText();
  }, 1000);
};