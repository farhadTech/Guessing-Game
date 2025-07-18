// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


// creating random number to guess
// const number = Math.random();
const maxScore = 20;
let score = maxScore;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// handling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score > 0) {
    if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⛔';
    score -= 2;
    document.querySelector('.score').textContent = score;
    } else if (guess == secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number🎊';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').backgroundColor = 'green';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high 🤦‍♂️';
    score -= 2;
    document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low 🤦';
    score -= 2;
    document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You lost the game. 💥💥';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * maxScore) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = maxScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
