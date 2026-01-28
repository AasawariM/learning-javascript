// objects
// another data structure
// just like arrays we use objects to group together different variables that belong together.
// both arrays and objects used to store multiple elements/values in single variable/entity

const jonasArray = [
  "jonas",
  "harington",
  2026 - 2000,
  "teacher",
  ["peter", "steve", "michael"]
];

// this is jonas array in which we know we have firstname,lastname,age,job,and friends listed array
// in arrays there is no way of giving this elements a name.
// so we cant reference the elements by name but only by their order number in which they appear in the array.
// to solve this problem we have another data structure in js called objects.

// so in objects we define key value pairs.
// with which we can give each element/value a name.

// we use curly brackets for creating objects
// {} are filled with key value pairs seperated with commas
// key is the variable name
// value is the actual value of any type we want
const jonas = {
  firstName: 'jonas',
  lastName: 'harington',
  age: 2026 - 2000,
  job: 'teacher',
  friends: ["peter", "steve", "michael"]
};

// so this is jonas object with 5 key-value pairs.
// keys are also called as properties.
console.log(jonas);

// there are many ways of creating objects
// above way is simplest way of creating objects using {},called object literal syntax.

// Big difference in objects and arrays is that
// in objects the order of values doesnt matter when we want to retrieve them.
// in arrays order in which we specify elements matters a lot.
// so we only access array elements using their order number.
// i.e
// arrays = for ordered data
// objects = used for unstrctured data,and data that we wants to name and then
//  retrieve from the object based on that name.

// how to get/retrieve data from an object?
// how to change data in objects ,using
// DOT vs BRACKET NOTATION.

// DOT Notation
console.log(jonas.lastName); // getting property lastName from jonas object using . notation.
// dot here is actually an operator that will go to jonas object and then retrieve the property
// with the name specified.

// BRACKET Notation
// same thing using bracket notation
console.log(jonas['lastName']); //here we need to specify string with property name i.e quotes

// in bracket notation we can put any expression.
// example : lets store the common repeating part from firstName and lastName properties i.e Name
const nameKey = 'Name';
// we can use this nameKey to get both first and last name.
// concatenation hoga in the expression 
console.log(jonas['first' + nameKey]); //firstName: jonas
console.log(jonas['last' + nameKey]); //lastName: harington

// same thing is not possible with .notation
// console.log(jonas.'last' + nameKey); //we cannot do this

// in dot notation we have to use real and final property name and not a computed property name.
// use [] notation when we need computation of property value.


// prompt function = built in function
// in which we write a string which will create a popup window with input field
// this function returns a string which we need to store in a variable.

const interestedIn = prompt("what you want to know about jonas?");
console.log(interestedIn); //we need to display the actual value of user's exepected property.
// console.log(jonas.interestedIn); we cannot do this, we will get undefined.
// undefined is what we get when we try to access the a property on object that doesnt exist.

// jonas doesnt have property called interestedIn = undefined
// we will use [] notation
console.log(jonas[interestedIn]); // if we input job we will get teacher.
// this is power of using [] , that is we can put expression inside it which will get evaulated
// to compute the property.

// we will write logic to display a custom string when user tries to access the property that doesnt exist.

if (jonas[interestedIn])  //this is truthy value if it exists and not undefined(falsy value).
{
  console.log(jonas[interestedIn]);
}
else //if value doesnt exists  = undefined aa raha h
{
  console.log("wrong request!");
}


// using . and [] notation to add new properties to the object.

jonas.location = "Mumbai";
console.log(jonas); //location property will be added.

jonas['twitter'] = '@jonasharington';
console.log(jonas); //twitter handle will be added.

// challenge
// "Jonas has 3 friends, and his best friend is called peter".

// without hardcoding values jonas ,3 and peter,
// means take these 3 values from object
console.log(`${jonas['firstName']} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// operator precedence
// . notation
// [] notation
// both have higher priority and works/executed left to right.

