'use strict';

// console.log(document.querySelector('.message')
// .textContent);
// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)

let SecretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess)



if (!guess){
    document.querySelector('.message').textContent = 'No number!'
} else if (guess === SecretNumber){
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if( score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

    //When the guess is too high
} else if (guess > SecretNumber){
    if (score > 0){
        document.querySelector('.message').textContent = 'Too high!';
        score = score - 1;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }

   //When the guess is too low     
} else if (guess < SecretNumber){
        document.querySelector('.message').textContent = 'Too low!'
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    SecretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})


