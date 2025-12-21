// building strings using template literals

const fName = "Aasawari";
const lName = "Mandhare";

const job1 = "web developer";
const birthY = 2003;
const currentYear = 2025;

const data = "I'm " + fName + ' ' + lName + ', a ' + (currentYear - birthY) + ' years old ' + job1 + '!';
console.log(data);

// to handle complex string like above one, with ES6 template literals is introduced.
// template literals helps assemble multiple pieces(values,variables,etc) into one final string.

const data1 = `I'm ${fName} ${lName}, a ${(currentYear - birthY)} years old ${job1}!`;
console.log(data1);

// one can use template literals even for simple regular strings
console.log(`Just a regular string...`);

// template literals used also to create multiline strings.

//  \n\  = special character for new line in javascript

// normally 
console.log("string with \n\
multiple \n\
lines");

// with template strings
console.log(`string with 
multiple
lines`);
