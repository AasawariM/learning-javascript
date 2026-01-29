'use strict';
/*
// selecting an element in javascript
// querySelector() is a method on a document object
// result of this method is an element
// into which we need to pass selector
// we want to select an element with class name number
// number is class  we defined in html document so accessed using . (same way as in css)

console.log(document.querySelector('.number')); //this selects the entire element
// with this we get entire div element
// what we did now is DOM Manipulation.
// we want to access the actual number value currently is ?
// to do so we have textcontent property
console.log(document.querySelector('.number').textContent);

// along with getting the text content we can set the content of the element also.
// here we manipulated the text content of one of the DOM nodes.
document.querySelector('.message').textContent = "🎉 Correct Number!";

// setting random number from 1 to 20 instead of ?
document.querySelector('.number').textContent = Math.floor(Math.random() * 20) + 1;

// same way for score
document.querySelector('.score').textContent = 10;

// same way of input field
// but instead of text content here we will need a value so will use value property.

// to get value from input field
console.log(document.querySelector('.guess').value); //nothing currently

// to set value to the input field
console.log(document.querySelector('.guess').value = 20); //prints 20
*/



// Handling Click Events

// javascript reacts to something that happens in the DOM = for this we use an event listener.
// event is something that happens on the page eg: mouse click,or a mouse moving,or a key press and many other events.
// with event listener we can wait for a certain event to happen and then react to it.

// In order to listen for an event we first need to select the element where the event should happen.
// we want to listen to the event on check button element here
// when we click on the button something should happen

//this will select the button element itself which will return an element on which we will call the
// addEventListener method 
// there are multiple ways in javascript to listen for events but using this  addEventListener method 
// is the best and most used one.
// in this method we first pass the type of an event here it is just a simple click
// after that we need to tell the event listener what to do so basically need to specify the 
// reaction to the click event and its done by defining the function.
// function will get executed whenever the click event happens on check button.
// this function is going to be called the event handler.
// so 2nd arugement will be event handler function value(its a function expression)


// for real game , when we click on the check button,the number inside the input field will have to get retrieved
// and we need to store it in a variable 




// document.querySelector('.check').addEventListener('click', function () {
//   const guess = document.querySelector('.guess').value;
//   console.log(guess);
//   console.log(typeof guess); // ANYTHING THAT COMES FROM AN USER INTERFACE FOR EXAMPLE ,INPUT FIELD HERE,
//   //  IS ALWAYS A String.
// });
// note that we dont call this function anywhere, we only define the function here and
// then pass it into the event handler
// but the js engine call this function as soon as the event happens.


// we will have to compare this guess number with a random number generated , so to compare numbers with numbers,
// we first need to convert this guess string to a number 
// so will use the Number function.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  // case 1: There is no guess/input (to check if there is a value in input field,if not print to console a msg)
  if (!guess) {
    const msg = document.querySelector('.message'); //message is a pragraph
    msg.textContent = "⛔ No Number!";
    msg.style.padding = '0 1rem';
    msg.style.boxShadow = '10px 10px 20px #ff00ff';
  }
});

