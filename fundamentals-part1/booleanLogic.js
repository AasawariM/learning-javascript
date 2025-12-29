// Boolean logic = a branch of computer science which uses true and false values to solve complex logical problems.
// in order to do so it uses several logical operators to combine true and false values.
// Logical operators = AND OR NOT
// boolean logic is for all programming languages and not specific to js.
// to get result for these we use truth table.

// AND
// if Both A and B conditions are true the result will be true as well.
// same for more than 2 values or operands than just A and B.
// so all given conditions need to be either true or false to get result true or false resp.


// OR
//even if one of the variables is true result will be true.
// for A OR B => if either A or B is true, result of OR operation will be true.
// if have multiple variables,its enough to have atleast one condition to be true to make the whole
// operation to be true as well.

// NOT
// doesnt combine values
// acts on only one boolean value
// inverts the value
// if A is true it will become false
// if A is false it will become true

// example
let age = 16;
let A = age >= 20; //false
let B = age < 30; //true

if (A && B) { //false AND true , will be false as both are not either just true or false.
  console.log("AND Operator");
}
if (A || B) { //false OR true , will be true as atleast one condition is true
  console.log("OR Operator");
}
if (!A) { // NOT A , will give true as opposite of A which is false.
  console.log("NOT Operator");
}

if (!A && B) { // will give true as opposite of A (false)=> true, and B (true).
  console.log("NOT A and B");
}

// NOT operator has precedence over AND and OR operators,
// so values are inverted first and then combined using AND or OR.

if (A || !B) { // will give false as A (false) and opposite of B(true) is also false , so both false.
  console.log("A or NOT B");
}

let hasDriverLicense = true;
let hasGoodVision = false;

console.log(hasDriverLicense);
console.log(hasGoodVision);

console.log("logical operators");
console.log(hasDriverLicense && hasGoodVision); //true && false = false
console.log(hasDriverLicense || hasGoodVision); //true || false = true
console.log(!hasDriverLicense); // !true = false

// using varibales to take decision
// whether someone should drive or not 
// a new boolean variable
const shouldDrive = hasDriverLicense && hasGoodVision;

//if (shouldDrive)
//put the condition directly in if condition
if (hasDriverLicense && hasGoodVision) {
  console.log("can drive");
}
else {
  console.log("cannot drive");
}
// a new boolean variable
const isTired = true;
console.log(hasDriverLicense && hasGoodVision || isTired); // true && false => false || true => true;


if (hasDriverLicense && hasGoodVision && !isTired) { // true && false && false = false
  console.log("can drive");
}
else {
  console.log("cannot drive");
}