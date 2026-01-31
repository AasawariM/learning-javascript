'use strict';
// in this small project ,we are building UI component,a modal window.
// we will learn here,how to work with classes,manipulating them ,
// which is a main way in which we manipulate web pages.

// first step as usual is to select the elements that we need and then
// we store the selections into variables.

let showBtn = document.querySelector('.show-modal');
const modalWindow = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

console.log(showBtn, modalWindow, closeBtn, overlay); //showBtn will log only first matched element.
// so to get all matched selections.
console.log(document.querySelectorAll('.show-modal')); //logs a nodelist 

// reassigning showBtn to access all 3 buttons with querySelectorAll
showBtn = document.querySelectorAll('.show-modal');

// if we want to access individual all buttons of class show-model we use,
//  for loop on nodelist (the one we are accessing with querySelectorAll).
// for loop is a way of selecting multiple elements with same class and with for loop 
// we can do something for each of them.
for (let i = 0; i < showBtn.length; i++) {
  console.log(showBtn[i].textContent); //logging text content of each of the 3 buttons.
}

//A NodeList does NOT have addEventListener() =  TypeError: showBtn.addEventListener is not a function

// showBtn.addEventListener("click", function () {
//   alert("Button Clicked");
// })

// document.querySelector('.show-modal')
// returns ONLY the first element with class .show-modal
// That return value is a single DOM element, One element can have addEventListener()
// selects only the first one

// document.querySelector('.show-modal').addEventListener("click", function () {
//   alert("Button Clicked");
// });


// ALL show-modal buttons should respond
// showBtn is a NodeList (array-like) so Indexes are zero-based i.e why first element is at index 0, not 1.



// closeModal function
const closeModal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}
// closeModal now holds the function value

// openModal function
const openModal = function () {
  console.log("Button Clicked");
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}


for (let i = 0; i < showBtn.length; i++) {
  showBtn[i].addEventListener("click", openModal
    // function () {   // this function is anyonomous / function expression i.e without any name
    // alert("Button Clicked");
    // console.log("Clicked" + i);

    // we want to display the modal on button click
    // so it means we will remove the hidden class defined in html and css for modalWindow div element,
    // for removing applied classes,on selected element ,we use classlist property which has remove method with
    // which we can remove one or more classes 
    // modalWindow.classList.remove('hidden'); //multiple classes can be removed ,by passing them using commas
    // rememeber .hidden is only for selector(mentioning dot with classname) and not here ,
    // here simply pass the name of class.

    // along with removing classes we can also add classes and also check if element contains a certain class or not.

    // here along with modalWindow we also need to remove hidden class from overlay div.
    // overlay.classList.remove('hidden');

    // we could have also done showing modal on button click by doing:
    // modalWindow.style.display = 'block';
    // but this is for one style 
    // what if , hidden class had 10 properties. 
    // then we would have to write all 10 properties here manually and change all their values.
    // instead we can aggregate all properties in one class defined in css and in js we simply add or remove these classes as we need.
    // }
  );

  // ability of hiding the modalWindow by clicking x button.

  closeBtn.addEventListener("click", closeModal //not closeModal() we dont want to call it here , instead we want js to call it on btn or overlay click.
    // function () {
    //   // to remove the model window on button click we need to add hidden class back to the element.
    //   modalWindow.classList.add('hidden');
    //   // also for overlay
    //   overlay.classList.add('hidden');
    // }
  );

  // ability to close/hide the modalWindow when we click outside of a modal.

  // so we need overlay eventlistener to be executed when we click on the overlay(outside).
  overlay.addEventListener("click", closeModal); //not closeModal() we dont want to call it here , instead we want js to call it on btn or overlay click.
}

// we dont want same code ( modalWindow.classList.add('hidden');
// overlay.classList.add('hidden'); )
// in 2 places
// we want acutally the same exact same function to be executed for both close btn and overlay click.
// we can simply export the function with duplicate code into real named function.
// new function closeModal defined above for loop with duplicate code from above 2 listeners

// same done for showBtn eventlistener = function openModal



// summary / Takeaway
// if we want to use same function in multiple event listeners,then we need to specify that function
// as a seperate function and then we need to pass that function as an argument to multiple addEventlistener methods.

// in practice we use functionality of adding and removing classes all the time in order to change the
// appearance of elements on our page bcz classes allow us to aggregate css properties in one container.
// so each class functions like a container with lot of properties in it.
// thus,here in js why adding and removing classess we basically can acitivate and deactivate certain styles all at the same time.
