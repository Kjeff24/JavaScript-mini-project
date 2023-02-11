//
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = true;
let hasStartedGame = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomNum() {
  let random = Math.floor(Math.random() * 13) + 1;

  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else {
    return random;
  }
}

function startGame() {
  if (hasStartedGame === false) {
    gameEnded();
    let firstCard = getRandomNum();
    let secondCard = getRandomNum();
    cards = [firstCard, secondCard];
    sum += firstCard + secondCard;
    renderGame();
  }
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?😉";
  } else if (sum == 21) {
    message = "Wohoo! You've got Blackjack!😊";
    hasBlackJack = true;
    hasStartedGame = false;
  } else {
    message = "You're out of the game!😢";
    isAlive = false;
    hasStartedGame = false;
  }

  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let count = 0; count < cards.length; count++) {
    cardsEl.textContent += cards[count] + " ";
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomNum();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

function gameEnded() {
  sum = 0;
  cards = [];
  hasBlackJack = false;
  isAlive = true;
}
