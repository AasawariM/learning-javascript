'use strict';

// selecting elements
const score0El = document.querySelector('#score--0'); //writitng selector # with querySelector method.

// as we are interested in Ids and not classes,we have
// another way of selecting elements,in which we only pass name of id of element.
// for Ids we use document.getElementById
const score1El = document.getElementById('score--1');
// console.log(score0El, score1El);
const diceEl = document.querySelector('.dice');

const btnroll = document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//initial values of scores
// .textContent value type is always a string.
score0El.textContent = 0; // passing 0 as a number but while displaying it is converted to number automatically.
// console.log(typeof score0El.textContent);
score1El.textContent = 0;

//initial dice image is hidden
diceEl.classList.add('hidden');

//****************************** starting with the  functionality ******************************
// Rolling the Dice

// to persist current_score value
let current_score = 0;
// selecting the button
// will need btnroll one.

btnroll.addEventListener('click', function () {
  // 1. generate a random number for dice roll
  // 2.display dice
  // 3.check if rolled 1:true , move to next player.

  const randomNum = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNum);

  diceEl.classList.remove('hidden'); // show dice
  diceEl.src = `assets/${randomNum}.png`;

  // add the dice roll number to the current element and also to the persistant variable

  // we not just want to display the current score to the UI instead we also want a variable in our code,
  // which always holds the current score of this current round.
  // we cant define that variable here in handler function bcz everytime (we roll a dice)button is clicked,
  // current_score we get reset.
  // if roll number is not 1
  if (randomNum !== 1) {
    // add dice number to the current score
    current_score += randomNum;
    current0El.textContent = current_score; //need to change later as per current player
  } else {
    // switch to the next player
  }
});
