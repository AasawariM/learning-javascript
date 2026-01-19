// expressions and statements

// expressions is a piece of code that produces a value
// example
3 + 4 // is an expression as its gonna produce a value
1991  //is an expression too even though is a simple value but produces a value in js

true && false && !true //expression as will produce some boolean value



//statements are like a bigger piece of code that is exectued and which does not produce a value on itself.

// statements(aka declarations) are like complete sentences that performs some actions whereas expressions are like words that make up our sentences.
// example

if (23 > 10) {
  const str = "23 is bigger";
}
// this if statement is a statement , it doesnt produce value,it performs some actions
// but the string here "23 is bigger" is an expression.
// and the whole sentence here
// const str = "23 is bigger";
// is an statement as doesnt produce value, statement end with a semi colon in the end.

// in template literals we can only insert expressions and not statements.
// example
// console.log(`I'm ${}`);
// in ${} we need to put expression , something that produces value

console.log(`I'm ${2026 - 2003} years old`);
// here ${2026 - 2003} is expression

const me = "Conrad";
console.log(`${me}`);
// here it is also expression bcz me in ${me} is replaced by actual string,so produces a value
