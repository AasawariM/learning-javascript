'use strict';
function calcAge(birthyear) {
  const age = 2026 - birthyear;
  function printAge() {
    // here the firstName will be jonas and not steven bcz it is not in the current scope of this function so js will do variable lookup.
    let output = `${firstName},  you are ${age},born in ${birthyear}`;
    console.log(output);
    // creating a block scope in printAge Function

    if (birthyear > 1981 && birthyear <= 1996) {
      var millenial = true;
      //creating new variable with same name as outer scope
      const firstName = 'steven'; // what will be dsplayed here jonas or steven?
      // will got steven bcz js will always first look in current scope and we found
      //  this here so js engine will not perform any variable look up in scope chain.

      // *** so scope chain isnt neccessary at all if the variable we are looking for is already in current scope.
      const str = `Oh, and you're a millenial,${firstName}`; //lookup for firstName
      console.log(str);

      // lets prove that functions are also block scoped starting with ES6
      // function to add two values
      function add(a, b) {
        return a + b;
      }
      // reassigning outer scope's variable
      output = 'New OUTPUT!'; //redefining variable from outer scope in this child scope.
      // and if we try to access it below then
    }
    // if tried this outside the block as its a const and const let variables are block scoped
    // console.log(str);
    // old pre ES6 variable
    console.log(millenial); //js can find var bcz var variables are function scoped (trying to access the variable that is defined in same function) so they ignore block.
    // calling the add function outside the block
    // console.log(add(2, 3)); //reference error add not defined
    // bcz scope of this add function is onlythe block in which it is defined,but
    // this is only true for strict mode.
    console.log(output); //bcz we manipulate an exisitng variable inside a child/inner scope.
    // we arent creating new variable ,we simply redefine a variable by accessing it from parent scope.
  }
  printAge();
  return age;
}
const firstName = 'jonas';
calcAge(1991);

// note that
// you can have multiple variables of same name in different scopes as they are completely different variables happen to have same name
// no problem of same name bcz they have defined in different scopes so you can have repeated variable names.
// thats also a reason why you have different functions with same parameter names.bcz each parameter is only defined in that scope of that function.
// i.e why there is not problem at all to have many functions with the exact same parameter names in the same way there is not a problem
// to have functions with same variable names inside of them.
// what happen if we reassgin the output variable inside block
