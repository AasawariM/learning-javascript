
// to reuse a block of code multiple times we define it once as function and can use it whenever we want to.

// function definition
function logger() {
  // function body
  console.log("Hello from Function!");
}

// invoking / calling / running the function
logger();
// we can call it as many tiems we want 
logger();


// when we write functions we can pass data into a function
// and functions can return data as well (giving data back to use it for something else in the program).
// so functions not only reuse a piece of code but can also receive data and return data back .

// use descritpive function names just like varibales 

// in this function we can also specify something called parameters and parameters are like variables 
// that are specifc only to this function and they will get defined once we call the function.

// 2 parameters passed = represents the input data of the function.
// these parameters are like empty spaces that still need to fillout when writing a function and
// when we call the function we fill these blank spaces by passing the real specfic values which
// will then get assigned to the parameters.

function fruitProcessor(grapes, mangoes) {
  console.log(grapes, mangoes);
  let juice = `juice with ${grapes} grapes and ${mangoes} mangoes`;
  return juice //return keyword is used to return any value from the function
  // juice will become the result of executing the function.
}


// here 20 and 4 will be inputs of fruitProcessor function.
console.log(fruitProcessor(20, 4));
// OR
let result = fruitProcessor(5, 3);
console.log(result);
// here 20,4 or 5,3 the actual values here are called the arguments.

// we can reuse the function with different values and get a different output

// above function is generic function we created for any number of grapes and mangoes

// we need to call a function atleast once bcz if we never call it the code inside it will never get executed.

// not all functions need to return something and not all functions need to accpet parameters.

console.log(logger()); //as function doesnt return anything so it doesnt produce a value so result it produces is not important which is undefined.


//console.log() here is also a function but a built in function.
// another built in function - Number() to convert string to number.
console.log(Number('21'));
console.log(typeof Number('21'));

