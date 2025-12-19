// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// value is a piece of data(fundamental unit of information in programming)

// console.log('Steve');
// console.log(35);

// we can store values in variables to use them again and again
// below we are declaring a variable
// it will create a new variable in a computer's memory and store value in that variable

// let fName = "Steve harrington";
// console.log(fName); //camel case = standard way
// let first_name = "Jonathan"; //can also write like this

//cannot start with numbers
// let 3years = 3
// all the errors we make will end up always in console without using console.log().

// let john&harry = 'jh'; cannot use '&'

// variables can only contain letters,numbers,underscore and $ sign.
// let john$harry = 'jh';
// let john_harry = 'jh';
// let j7h8 = 'jh';

// cannot use reserved js keywords
// let new = 27;
// let function = "abc";
// let switch = "abc";

// only 2 symbols allowed besides letters and numbers
// i.e only letter, '_' and '$' should be the first character
// let _function = "abc";
// let $switch = 4;

// name = a kind of reserved keyword but legal to use = thus, dont use 

// let name = "john";
// console.log(name);

// should not use uppercase also to start a variable name
// convention thus not illegal 
// but used in specific use case like OOP in js
// let Person = "Ram";

// therefore use it like this = lowercase starting
// let person = "Ram";

// variables that are fully uppercase are reserved for constants that we know will never change.
// let PI = 3.1415;

// final naming convention = make sure variable names are descriptive (easy to understand what value it holds just by reading a name of variable).

// let myFirstPetName = "Tommy";
// let myCurrentPetName = "Scotch";

// above is better than below

// let pet1 = "Tommy";
// let pet2 = "Scotch";



// ***************** datatypes ***********************
// in any programming lang, values can have different types,
// depending upon the type of data that we want them to hold.

// 7 primitive datatypes in Javascript.
// js executes code from top to bottom so we need to declare the varible first before logging it.
let jsIsFun = true;
console.log(jsIsFun);

// typeof = an operator just like + and - , it results as a string with a type of a given value , here boolean
console.log(typeof jsIsFun);
console.log(typeof true);
// numbers and strings
console.log(typeof 34);
console.log(typeof 'Good Morning');
// console.log(typeof john); //will give undefined as variable is not declared 

let john;
console.log(typeof john); //output will be undefined as variable is declared but not initialized.

// as we are doing line 81 ,  above 2 lines will give an error as ReferenceError on line 81.
// ReferenceError = Variable is not declared AND you access it without typeof.
// comment it and check

// In JavaScript, declaration means creating a variable,
// and definition (also known as initialization or assignment) means giving it a value

// Dynamic typing = easily changing the type of a value that is hold by a variable.

//we have jsIsFun variable declared already , lets reassgin it (change value)
jsIsFun = "Yes!";
// changed true i.e boolean to "yes!" i.e string
console.log(jsIsFun);
console.log(typeof jsIsFun);


// undefined data type = empty value 
let year;
console.log(year);
console.log(typeof year);
// above 2 lines will give undefined as
// note that undefined is both value and the type of a value.
console.log(typeof undefined);
// just above line will give undefined only

// ressgin year
year = 2026;
console.log(year);
console.log(typeof year);

// null data type
// similar to undefined as here also null is both value and the type of a value
console.log(typeof null);
//typeof will give an object ,  not like undefined here.


