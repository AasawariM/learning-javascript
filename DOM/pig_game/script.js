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

const winning_score = document.querySelector('.winning-score');
//initial values of scores
// .textContent value type is always a string.
// score0El.textContent = 0; // passing 0 as a number but while displaying it is converted to number automatically.
// console.log(typeof score0El.textContent);
// score1El.textContent = 0;

let scores, current_score, activePlayer, playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  winning_score.classList.remove('hidden');
  Player0El.classList.remove('player--winner');
  Player1El.classList.remove('player--winner');
  Player0El.classList.add('player--active'); //even if already class there it wont add it again.
  Player1El.classList.remove('player--active'); //even if already not there then wont give error
  // state variables.
  // all have local scope as inside function only
  // i.e why they're not accessible outside the function
  // so i.e why declaring them outside of any function without any value.
  // so we declare them outside but assign here.
  scores = [0, 0];
  current_score = 0;
  activePlayer = 0;
  playing = true;
};

// in 2 cases we want this function to run
// 1) when we load the page for very first time.
// 2) when reset button is clicked.
// for case 1) of init()
init();
//****************************** starting with the  functionality ******************************
// Rolling the Dice

// to persist current_score value
// let current_score = 0;
// active player
// setting it to 0 since we have started with first player.
// let activePlayer = 0;
// why we have player 0 and 1 and not 1 and 2 is bcz we will store the scores of both players in an array.
// const scores = [0, 0]; //start with 0 points for both sides
// these scores are actually final scores(which are bigger in size).
// score of first player is at position 0 and of 2nd player is at position 1.

// for playing or not(after winning we need to check for this)
// let playing = true; //boolean value(we are playing in the start)

// selecting the button
// will need btnroll one.
btnroll.addEventListener('click', function () {
  if (playing) {
    winning_score.classList.add('hidden');
    //code for roll is only executed if this condition is true. so nothing will happen if condition is false thus no need of else block.
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
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // resetting current score as we switch the player.
      // current_score = 0;
      // if active player is 0, make new active player to the player 1 else it should be 0.
      // activePlayer = activePlayer === 0 ? 1 : 0;
      //visual change on switching players
      // Player0El.classList.remove('player--active');
      // Player1El.classList.add('player--active');
      // instead of add and remove we can use toggle method
      // toggle method
      // adds a class it its not there and removes the class if its there.
      // we could also do this with contains method by first checking if its there and if yes then remove but we have simplified method i.e toggle method.
      // Player0El.classList.toggle('player--active');
      // Player1El.classList.toggle('player--active');
      switchPlayer();
    }
  }
});

// generic function for switching to next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  current_score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  Player0El.classList.toggle('player--active');
  Player1El.classList.toggle('player--active');
};

// when user clicks on button btnhold
// we want to add current score to the total/global score.
// we need to keep these total/global score persistant similar to the current score.

// switching of current player only happens when the score is below 100,
// bcz when the score is atleast 100, current player wins.
btnhold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player's total score

    //to store the scores we are using scores array variable which at the same time holds the
    // score of both players [at positions 0 and 1 resp.]
    //so we can use activePlayer variable to get the correct score of the current player.
    scores[activePlayer] += current_score;
    console.log(scores[activePlayer]);

    // i.e if activePlayer is 2nd player i.e player1 then => scores[1] = scores[1]+current_score;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player's score is >=100
    // finish the game
    let input = Number(winning_score.value);
    // if user enters anything let it be the finalScore and if not then final score will be 20.
    const finalScore = input > 0 ? input : 20;
    if (scores[activePlayer] >= finalScore) {
      // as soon as we get the winner
      playing = false;
      // hide the dice
      diceEl.classList.add('hidden');
      // so we have to wrap the logic inside both hold and roll functions around the logic that
      // the code inside them will only be executed if playing is true.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // we also need to remove the active style applied to active player class when previous player wins,
      // bcz otherwise will have active player class at the same time as player winner class.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      //what we want is if player wins hide the dice and also make the roll and hold buttons unclickable.
      // solution is create a variable to hold the state of the game.
      // so if we are still playing or not
      // this will be a state variable,which tells us the condition of a system.
      // condition will be is the game playing or not.
      // if game is playing then everything will be normal and if as soon as game is finished we will say
      // game is no longer playing(unable to click on buttons).
    } else {
      // when the game finishes,we dont want to switch the player,but if it doesn't only then do switch the player.
      switchPlayer();
    }
  }
  // if not
  // 3.switch to the next player
  // we need to switch to next player after adding current score to final score of current player.
  // we need same functionality as previous
  // so will create a generic function to be used in both event handlers.
  // switchPlayer();
});

// resetting the game
// for case 2) of init()
//removing anonymous fucntion and instead used init function here which is again just a  value
// btnnew.addEventListener('click', init);
btnnew.addEventListener('click', function () {
  init();
  winning_score.value = '';
});
