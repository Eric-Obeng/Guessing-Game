'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayScore = message => {
  document.querySelector('.score').textContent = message;
};

//DOM Document Object Model
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('🚩 No value');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Refactoring
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('🤦‍♀️ You lost the game!');
      displayScore('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
