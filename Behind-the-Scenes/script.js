'use strict';
function calcAge(birthyear) {
  const age = 2026 - birthyear;
  // creating another function inside of this function
  function printAge() {
    //this function will create a new scope
    const output = `${firstName},  you are ${age},born in ${birthyear}`;
    console.log(output);
  }
  printAge(); //as we are executing the printAge function, js engine is trying to access/find the age variable in
  // the current scope as it is not in current scope so it goes to parent scope where it does found the age variable.
  //same true for birthyear variable because for scoping the parameter of a function work just like normal variables
  return age;
}
const firstName = 'jonas';
calcAge(1991);
// age wont be accessible here as it is accessible only inside the function
// console.log(age);
// scope chain is always one directional
// only an inner scope can have access to the variables of its outer scope
// , not the other way around
// same for functions
// we cannot do
// printAge();

// so here in global scope we dont have access to any variables defined in any other scope.
// firstName variable is also accessed in printAge function by doing variable lookup in scope chain.
// js engine first checks in current scope, not found,so looks up in scope chain
//  which is the calcAge function its also not there then it goes even further i.e in global scope and its there.
