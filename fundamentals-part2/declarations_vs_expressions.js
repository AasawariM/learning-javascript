// There are different ways of writing functions in javascript

//1. function declarations
// using 'function' keyword to declare a function.
// example:To calculate age based on given birth year 
function calcAge(birthY) {
  // const age = 2037 - birthY;
  // return age;

  return 2026 - birthY;
}
// above is generic function which can work for any birthyear given
// calling / invoking it.


const age = calcAge(2003);
//2003 is argument here its the acutal value, whereas parameter is like placeholder in function
console.log(age);

// This above is called function declaration.





// 2. Function Expressions
// its function without name
// also called as anonymous function.
// storing function value in a variable.
// called as expression as produces a value.

// same example in the form of function expression
const calcAge2 = function (birthY) {
  return 2026 - birthY;
}
// calling is done in exact same way.
const age2 = calcAge2(2003);
console.log(age2);

// This is function expression.
// this belwo part is called expression acutally

//  function (birthY) {
// return 2026 - birthY;
// }

// as produces a value
// and we assign its value to a variable calcAge2.

// functions are values like number string or boolean value and not types like string or number type.
// as values we can store them in variables.

// ************ Big difference between function declarations and function expressions **********************

// we can call function declarations before they are defined in the code.
// example 

const sum = sumCalc(5, 10); //calling function sumCalc() before it is defined 
// calling it first defining it later

console.log("sum is " + sum);

function sumCalc(a, b) {
  return a + b;
}

// we cannot do this with expressions
// example

const sum2 = sumCalc2(5, 10); //calling function sumCalc2() before it is defined 
console.log("sum is " + sum2);

const sumCalc2 = function (a, b) {
  return a + b;
}
// we get error as cannot access 'sumCalc2' before initialization.
// this interally happens due to the process called hoisting.



// one can use any type of function for creating their own functins.
// prefer to use function expressions as give nice structure.
// in which we first define all functions on the top of code and later only we can call them.
// this make code nicer and structred.
// cases in which we need to store functions in variables.
