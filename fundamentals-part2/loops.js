// we know if/else is a control structure and also there are more control structures.
// one of them are loops
// loops are important bcz they allow us to automate repetitive tasks.

// for loop
// has a counter(start value)

// for loop has 3 parts: 
// initial value of a counter;
// logical condition evaluated before each iteration of loop(for loop keeps running while this condition is true);
//increment/decrement (counter updated after each iteration)
for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights repetition " + rep);
  // OR using template literal
  // console.log(`Lifting weights repetition ${rep}`);
}


// looping through an array using for loop
const jonasArray = [
  'jonas',
  'smith',
  2026 - 2003,
  'developer',
  ['mike', 'belly', 'will'],
  true
];

// we want to log every element of an array to the console
console.log(jonasArray.length);

// Reading from jonas array
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}
// above we just read the elements/values from array using the loop
// i.e to create a new array based on the values of original array.

// lets create the new array which will contain the type of each of the elements.
// new array creation which will contain all the types for all these elements.

// filling types array
// way 1

let jonasArrTypes = []; //empty array outside the loop
for (let i = 0; i < jonasArray.length; i++) {
  jonasArrTypes[i] = typeof jonasArray[i];
}
console.log(jonasArrTypes);

// way 2
// adding elements to an array using push method (adding to the end of an array)
let jonasArrTypes1 = [];
for (let i = 0; i < jonasArray.length; i++) {
  jonasArrTypes1.push(typeof jonasArray[i]);
}
console.log(jonasArrTypes1);


// another example
// years array which contains birthYears
// we want to calculate the ages for all given birthYears in array and store it in a new array.
const years = [1991, 2007, 1969, 2020];
// new empty array 
const ages = [];

for (let i = 0; i < years.length; i++) {
  const age = 2026 - years[i];
  ages.push(age);
}
console.log(ages);

// important statements for loops
// continue and break statement

// continue
// used to exit the current iteration of the loop and continue from the next iteration.

// break
// used to completely terminate the whole loop

// example
//  from jonas array we want to print only elements that are strings
// continue statement is perfect for this

console.log("Jonas Array ", jonasArray);

console.log("------------only Strings-------------");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") {
    continue;
  }
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// example
// log no other elements after we found a number
//i.e from jonas array , after the first number is found which is 46 nothing else is printed.

console.log("------------Break with Number-------------");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") {
    break;
  }
  console.log(jonasArray[i], typeof jonasArray[i]);
}