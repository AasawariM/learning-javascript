// arrays - a data structure

// const friend1 = "conrad";
// const friend2 = "belly";
// const friend3 = "mike";
// const friend4 = "eleven";

// instead of this doing one by one we use data strctures like arrays.

// two important data structures in js are arrays and objects.
// array is like a big container into which we can throw variables and later reference them.
// creating array: comma seperated values

// literal syntax
const friends = ["conrad", "belly", "mike", "eleven", "dustin", "lucas", "steve"];
console.log(friends);

// another way of creating arrays = using Array Function.
// array can store aas many values we want also of any type
const yearss = new Array(2003, 1991, 2004, 2006);

// to get the elements from array
// arrays are zero based , first element is at index 0
console.log(friends[0]); //to get first element
console.log(friends[4]);

// to get acutal number of elements in array using length property
console.log(friends.length); // length property is not zero based
// to get the last element from array
console.log(friends[friends.length - 1]); //7-1 = 6 , element at position 6 (last element)
// inside friends[] brackets we can put any expression it doesn't just have to be a number only
// expression produces value so code inside [] will get calculated first.
// we cannot put statement in [] .


// [] syntax is not jsut to retrieve elements from array but also for adding new elements to the array
// in my array i want to replace belly with another friend called will
// now we can mutate the array 

friends[1] = 'will';
console.log(friends); // new array 

// we know variables declared with const cannot be changed and here the friends array is declared with const,
// but here we are mutating the friends array content.WHY?

// this is bcz ONLY PRIMITIVE VALUES ARE IMMUTABLE
// Array is NOT A PRITIMIVE VALUE.
// so , we can mutate it even if they are declared with const.

// what we cannot do is:Acutally replace the entire array.
// we cannot do this
// friends = ["jeremiah", "Alice"]; //get error as assignment to constant variable


// Array can hold values with different data types at the same time
// example 
const firstName = 'conrad';
const biodata = [firstName, 'fisher', 2026 - 2003,//expression to produce value as age of user and will be stored at index 2.
  'student', friends]; //can put another array in one array  

console.log(biodata);

// exercise
// lets say we have array for birth years and we want to calculate age for some of them
const calcAge = (birthY) => 2026 - birthY;
const years = new Array(1990, 2003, 2010, 2016, 2021);
//we cannot do this line below
calcAge(years);
// bcz  2026 - birthY; expects a single value and we cannot do number - array
// so error will be 
console.log(calcAge(years)); //NaN
// bcz subtracting years array from 2026 a number will give NaN

// what we can do is
// use calcAge function on individual elements of array
// we want to calculate age of elements at index 0 1 and last element

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[years.length - 1]));

// we can create new array with these expressions ,so
//  js will first produce value by doing individual function calls and store it in those positions.

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



