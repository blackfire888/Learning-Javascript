'use strict';

//THIS IS CALLED DOM MANIPULATION
// console.log(document.querySelector('.message').textContent);
// //document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//--event listener (mouse movement, mouse click, etc..)--

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;
////

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    //**implementing the highscore**
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //--

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is TOO HIGH
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too High';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You lost the Game!';
    //       document.querySelector('.score').textContent = 0;
    //     }

    //     //WHEN GUESS IS TOO LOW
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too Low';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You lost the Game!';
    //       document.querySelector('.score').textContent = 0;
    //     }
  }
});
//
//Coding Challenge
//
document.querySelector('.again').addEventListener('click', function () {
  //part 1: restore values of score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //part 2
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //part 3
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
