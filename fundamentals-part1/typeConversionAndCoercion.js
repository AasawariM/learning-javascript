// type conversion and type coercion
// type conversion = manually converting one type to another(explicit)
// type coercion = js automatically converts types behind the scenes(implicit)


// ********************* type conversion *********************


const inputYear = '1991';
console.log(inputYear + 18);
// here we have string and we add something to string it will concatenate the strings
// output will be 199118
// so we need to convert the inputyear string to number.

// using Number() a built in function to convert string to number.
// console.log(Number(inputYear));
// printing both number and string
console.log(Number(inputYear), inputYear);

// yet original value is not converted
// so we need to add Number() to here below as well
console.log(Number(inputYear) + 18);

// it returns NaN = (invalid number). if string doenst contain number
console.log(Number('Steve'));
// Js gives NaN value when an operation that involves numbers fails to produce a new number.

console.log(typeof (NaN)); //number but its a invalid number.


// doing opposite
//String() = to convert number to string.
console.log(String(23), 23); //a string (in white color), a number

// console.log(String(23) + "hellooo");

// js can only convert to 3 types =  to number , to string and to boolean

// we did above to number and to string using explicit type conversion.



// ********************* type coercion ************************


// happens when an operator is dealing with 2 values that have different types thus,
// js will behind the scenes convert one of the values to match the other value.

console.log("I am " + 23 + " years old");
//here we have string , number and another string
// here the plus operator triggers a coercion to strings.
// whenever there is an plus operation between a String and a number, the number will be converted to a string.
// so we can write also this
console.log("I am " + '23' + " years old");
// bcz the plus operator  again converts  numbers to strings
// same happens in template literals.

// not all operators do type coercion to string.
console.log('23' - '10' - 3); //10
// here the minus operator converts strings to numbers.
// if used plus(+)
console.log('23' + '10' + 3); //concatenation of strings.

// both below are converting strings to numbers before calculation.
console.log('23' * '2');
console.log('23' / '2');

// guess
let n = '1' + 1; // '11' (plus operator = coercion to string)
n = n - 1;  // 11-1 (minus operator = coercion to number)
console.log(n);
// 10

console.log(2 + 3 + 4 + "5"); // '95'


console.log('10' - '4' - '3' - 2 + '5');
// 3-2+'5' = '15'

// When comparing a string ('18') and a number (18) like '18'== 18,
// JavaScript automatically attempts to convert the string to a number.
// will see this in equality operators.