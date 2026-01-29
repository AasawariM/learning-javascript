'use strict';

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
