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

const Player0El = document.querySelector('.player--0');
const Player1El = document.querySelector('.player--1');
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
// active player
// setting it to 0 since we have started with first player.
let activePlayer = 0;
// why we have player 0 and 1 and not 1 and 2 is bcz we will store the scores of both players in an array.
const scores = [0, 0]; //start with 0 points for both sides
// these scores are actually final scores(which are bigger in size).
// score of first player is at position 0 and of 2nd player is at position 1.

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
    document.getElementById(`current--${activePlayer}`).textContent =
      current_score;
  } else {
    // when player rolls 1
    // lose all current score
    // switch to the next player
    // to switch we need to know which one is active player
    // will create a variable to keep track of current playing player and will get that based on button click
    // created activePlayer variable above
    // it will hold 0 if current player is Player0 and it will hold 1 if current player is Player1

    // before switching the player we need to change the current_score of current active player back to 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // resetting current score as we switch the player.
    current_score = 0;
    // if active player is 0, make new active player to the player 1 else it should be 0.
    activePlayer = activePlayer === 0 ? 1 : 0;

    //visual change on switching players
    // Player0El.classList.remove('player--active');
    // Player1El.classList.add('player--active');
    // instead of add and remove we can use toggle method
    // toggle method
    // adds a class it its not there and removes the class if its there.
    // we could also do this with contains method by first checking if its there and if yes then remove but we have simplified method i.e toggle method.
    Player0El.classList.toggle('player--active');
    Player1El.classList.toggle('player--active');
  }
});
