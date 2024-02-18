'use strict';

const checkBtn = document.querySelector('.check');
const messageText = document.querySelector('.message');
const numberBox = document.querySelector('.number');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let highScore = 0;

const displayMessage = message => {
  messageText.textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number');

    //When player wins
  } else if (guess === randomNumber) {
    numberBox.textContent = randomNumber;
    displayMessage('💥 Correct number');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== randomNumber) {
    if (gameScore > 1) {
      displayMessage(guess > randomNumber ? '❗ Too high' : '❗ Too low');
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      displayMessage('You lost the game ❗');
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});

const resetBtn = document.querySelector('.again');
resetBtn.addEventListener('click', function () {
  gameScore = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  numberBox.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = gameScore;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
