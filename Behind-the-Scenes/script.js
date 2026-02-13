'use strict';

// function calcAge declaration
// defined in global scope bcz it is in top-level code
// this function here creates its own scope which will be equivalent to the varible environment of its exection context.
function calcAge(birthyear) {
  const age = 2026 - birthyear;
  console.log(firstName); //this variable is not actually in this function scope however it is global variable
  // through the scope chain its gonna be made available inside this function.
  return age;
}

// creating a global variable
const firstName = 'jonas';
// calling the function
calcAge(1991);

// when js executed this line
// console.log(firstName);
// js didnt find this variable in the function scope so it did a variable lookup where it looked up
// in the scope chain to see if it found the variable there,and as the parent scope of the calcAge function is the global scope and firstName variable is there.
// even though the variable is defined after calcAge function
// but thats not a problem bcz code in the function is only executed when its called.
// and that  happens after declration of firstName variable.
// so this variable is already in global execution variable enviornment
// so global scope is ready to be used.
