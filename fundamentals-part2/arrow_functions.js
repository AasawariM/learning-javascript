//we learned about function declarations and function expressions ,but there is 3rd type of function
//  that was added to javascript in ES6 that is called Arrow function.

// Arrow function is simply a special form of function expression that is shorter and faster to write.

// example of function expression
const calcAge2 = function (birthY) {
  return 2026 - birthY;
}
const age2 = calcAge2(2003);
console.log(age2);



// example of Arrow function

// birthY => 2037 - birthY;
// to be able to use it we need to store it in a variable

const calcAge3 = birthY => 2026 - birthY;
// we dont need {} to define a code block and return happens here implicitly
// 2037 - birthY; will be returned automatically without writing return keyword explicitly.
// this is best for one-liner functions.
// calling it and storing result.
const age3 = calcAge3(2003);
console.log(age3);

// this is simpler form when we have only one parameter (birthY here ) and
//  one line of code in which we want to return something.


// let make it more complex

// function to calculate how many years a person has left until retirement.
// as we need more lines of code so need {} to define code block
const yearsUntilRetirement = birthY => {
  const age = 2026 - birthY;
  const retirement = 65 - age;
  return retirement; //we can only emit return keyword when we have one line of code
}
const data = yearsUntilRetirement(2003);
console.log(data);


// what if we have multiple parameters?
// then we need to wrap the parameters into ()
// we want first name along with birth year.

const yearsUntilRetirement1 = (birthY, firstName) => {
  const age = 2026 - birthY;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}
const data1 = yearsUntilRetirement1(2003, "Conrad");
const data2 = yearsUntilRetirement1(2006, "Belly");
console.log(data1);
console.log(data2);



// fundamental difference between traditional functions (declarations and expressions) and
// arrow functions is that
// arrow functions do not get so-called this keyword.
