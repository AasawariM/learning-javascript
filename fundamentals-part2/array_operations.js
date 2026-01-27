// javascript has some built in functions that we can apply directly on arrays and these are called methods.
// we can think of methods as array operations.
//basic useful array methods

// friends array
const friends = ["conrad", "belly", "mike", "eleven", "dustin", "lucas", "steve"];
console.log(friends);

// add elements 


// ************************* 1) push method *************************

// add elements to the end of an array

friends.push("jay");
console.log(friends);

// push() is a function that we call by attaching it to an array using .(dot),
//thus, it becomes a method.
// wwe have passed an argument "jay" to the function.
// since push() is function it can return something ,the value it returns is length of new array.
// we can store it in new variable and check
const newLength = friends.push("john");
console.log(friends);

console.log(newLength);


// ************************* 2) unshift method *************************

// add elements to the beginning of an array
friends.unshift("jeremiah");
console.log(friends);

// unshift also return length of new array like push method.


// remove elements


// ************************* pop method *************************

// opposite of push method
// delete/remove elements from end of an array
// returns deleted/removed element.

const element = friends.pop(); //removed john
console.log(element);
console.log(friends);


console.log(friends.pop()); //removed jay
console.log(friends);


// ************************* shift method *************************

// opposite of unshift method
// delete/remove elements from the beginning of an array
// returns deleted/removed element.

friends.shift();
console.log(friends); //element at index 0 removed



// method to tell us in which position certain element in array is

// ************************* indexOf method *************************

const conradPosition = friends.indexOf("conrad");
const lucasPosition = friends.indexOf("lucas");
console.log(conradPosition, lucasPosition);

console.log(friends.indexOf("bells")); //returns -1 if index not found with given element = element not present in array



// ************************* includes method *************************
// ES6 method
// instead of returing the index of the element,it simply returns true if element present in array and
// false if its not.

console.log(friends.includes("belly")); //true = present
console.log(friends.includes("bells")); // false = not in array

// includes method uses strict equality for this purpose
// example 
// adding number to the array
friends.push(10);
console.log(friends);
console.log(friends.includes("10")); //checking for string 10 but false as it doesnt perform type coercion as strict equality operator
console.log(friends.includes(10));

// we can use includes method to write conditionals
if (friends.includes("conrad")) { //true
  console.log("belly, conrad is here!");
}
else {
  console.log("conrad not found,check for jeremiah");
}

