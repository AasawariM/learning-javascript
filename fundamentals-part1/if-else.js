// taking decisions

const age = 15;
const isOldEnough = age >= 18;
console.log(isOldEnough);



// using if statement
// condition is anything that returns a boolean value

if (isOldEnough) {
  console.log("can start driving license 😊!");
}

// if else 
// else block is optional
// when no else block, js will move to the next line after the if statement, if condition is false.
if (age >= 18) {
  console.log("can start driving license 🚗😊!");
}
else {
  const yearsLeft = 18 - age;
  console.log(`too young 😒! wait another ${yearsLeft} years`);
}

// this if-else construction above is called if-else control structure.
// bcz this structure allows us to have more control over the way our code is executed.

// example 2
const birthYear = 2003;

// if (birthYear <= 2000) {
//   let century = 20;
// }
// else {
//   let century = 21;
// }
// console.log(century); 

//this will give error as variable century needs to be declared outside the blocks of if and else.
// bcz any variable that we declare inside a code block will not be accessible outside of the block
let century;
if (birthYear <= 2000) {
  century = 20;
}
else {
  century = 21;
}
console.log(century); 