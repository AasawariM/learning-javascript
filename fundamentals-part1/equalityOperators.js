// Equality Operators
//  == VS. ===


// when we want to check whether 2 values are actuallly equal instead of one being greater or less than the other,
// we use different equality operators.

// assignment => = 
const age = '18';
// exactly equal => comparison with 3 equals = strict equality operator
if (age === 18) console.log("adult (strict)");
// equality operators also returns true or false similar to comparision oprators.
// strict equality operator  = means doesnt perform type coercion.
// try in console
'18' === 18;
// as string and number are different types and it will return false.
// javascript won't convert them for us.


// loose equality operator = only 2 equals = perform type coercion.
if (age == 18) console.log("adult (loose)");

// try in console
'18' == 18;
// JavaScript automatically attempts to convert the string to a number.
// and result is true as type becomes same after coercion.


//general rule for clean code: try to avoid loose equality operator as much you can(==).

// and for comparing values always use strict equality operator (===).


//another example

// let num = prompt("what's your favourite number?");
// console.log(num);
// this num here is string , check the type.
// console.log(typeof num);

// loose equality = does type coercion = string to number i.e
// num which we know is a string will get converted to a number

// if (num == 20) {   //'20' == 20
//   console.log("cool! 20 is amazing number");
// }



// so instead we will use === and use a built in Number function

let num = Number(prompt("what's your favourite number?"));
console.log(num);
console.log(typeof num);

if (num === 20) { //20 === 20
  console.log("cool! 20 is amazing number");
}

// here will also know that we can add more conditions to if-else statement
// that is using else if block

else if (num === 7) {
  console.log("7 is also a cool number");
}
// can add many else if conditions 
else if (num === 9) {
  console.log("9 is also a cool number");
}
// can also add else block
else {
  console.log("Number not 20 or 7 or 9");
}

// different , an operator
// opposite of equal
// here !== is strict version and != is loose version 
if (num !== 23) {
  console.log("not 23");
}