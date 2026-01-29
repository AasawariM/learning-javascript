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
// console.log(document.querySelector('.number').textContent);
