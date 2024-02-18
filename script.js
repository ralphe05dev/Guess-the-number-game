'use strict';

const checkBtn = document.querySelector('.check');
const messageText = document.querySelector('.message');
const numberBox = document.querySelector('.number');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let highScore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    messageText.textContent = '⛔ No number!';

    //When player wins
  } else if (guess === randomNumber) {
    numberBox.textContent = randomNumber;
    messageText.textContent = '🎉 Correct number!';
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is higher than the random number
  } else if (guess > randomNumber) {
    if (gameScore > 1) {
      messageText.textContent = '❗ Too high';
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      messageText.textContent = 'You lost the game❗';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is lower than the random number
  } else if (guess < randomNumber) {
    if (gameScore > 1) {
      messageText.textContent = '❗ Too low';
      gameScore--;
      document.querySelector('.score').textContent = gameScore;

      // when the players tries a certain number of times and loses.
    } else {
      messageText.textContent = 'You lost the game❗';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});

const resetBtn = document.querySelector('.again');
resetBtn.addEventListener('click', function () {
  gameScore = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  messageText.textContent = 'Start guessing...';
  numberBox.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = gameScore;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
