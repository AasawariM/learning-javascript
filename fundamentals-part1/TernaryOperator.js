// we did 2 ways of writing conditionals
// regular if else and switch statements

// another one is Ternary (conditional) operator
// this operator allows us to write something similar to if else but all in single line

const age = 23;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 🥤");
// after ? we will write if block (code to be executed if ? ke aage ka condtion(age >= 18) is true)
// for mandatory else block , after if block we put : after that we write else ka code.

// conditional operator is called ternary operator
// because it has 3 parts unlike other operators
// for example plus operator has only 2 parts 1+2
// here we have 3 as
// condtion ,  if part and else part

// operator always produces a value , i.e operator is an expression

age >= 18 ? 'wine 🍷' : 'water 🥤';
// this now become expression
// so it will produce value,will store it in variable
const result = age >= 18 ? 'wine 🍷' : 'water 🥤';
console.log(result);

// with if else we have to declare drink variable( which store result) outside first
let drink;
if (age >= 18) {
  drink = 'wine 🍷'; //re assgin 
}
else {
  drink = 'water 🥤';
}
console.log(drink);


//in template literals we cannot use if statement,it didnt work
console.log(`${drink} if (23 > 10) {
  const str = "23 is bigger";
}`);

// since ternary operator is an expression we can now use it in template literals
// if block didnt worked in template literals but with ternary operator which produces a value,
// we can have conditionals inside template literal.

console.log(`i like to drink ${age >= 18 ? 'wine 🍷' : 'water 🥤'}`);

// remember operators and expressions always produces a value

// ternary operator is not a thorught of replacement of if/else statements.
// when we have bigger blocks to be executed based on condition we need if else only
// ternary operator is best for taking quick decisions like above example.
