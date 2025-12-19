//  ***************** let , const , var ***********************
// 3  ways of declaring variables in javascript.

// let and const are introduced in ES6 = modern Javascript
// var keyword is oldest way of declaring variables.

// ****** let keyword ******


// use to declare variables that can change later during execution of program
// eg: mutating age variable
let age = 40;
age = 65;

// also used for empty value (unassigned) variables
let year;




// ****** const keyword ******

// variables declared with const will not change at any point in future.(value cannot be changed it is constant).
// so cannot mutate and also cannot declare empty const variables
const birthYear = 2003;
// birthYear = 2006;
// get TypeError error in console as assginment to constant variable.

// const job; // this is not legal = intialization is needed


// ****** Best practice for writing clean code  ******
// const =  by defualt and let  = when sure that variable will change at some time in future.




// ****** var keyword ******
// avoid now = old way (prior to ES6)
// works similar as let
var job = "developer";
job = "programmer";


// not declaring a variable with keyword
lastName = "mandhare";
console.log(lastName);
// not good idea
// this dont create variable in scope.
// instead js create property on the global object.


// always properly declare variables.



// var  = can be redeclared and updated (GLOBAL SCOPE)
var abc = 234;
var abc = "aasawari";
var abc = true;

console.log(abc); //prints last defined value




// let  = can not be redeclared but can be updated  (BLOCK SCOPE)
let pqr = 234;
// let pqr = "aasawari"; //will give error
pqr = false;
console.log(pqr);


// const = cannot be redeclared or updated  (BLOCK SCOPE)
const day = 3;
// const day = "wed";   will give error as try to redeclare
// day = "wed";         will give error as try to update
