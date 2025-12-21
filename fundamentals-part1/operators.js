// operators in javsscript

// using arithmatic minus operator to calculate the ages based on person's birth year.



// arithmatic operators

let ageBelly = 2037 - 2003;
let ageConrad = 2037 - 2000;

// we can log different values at the same time in one console.log
console.log("Age of Belly and Conrad is " + ageBelly + " and " + ageConrad);

// here we are repeating value 2037 , so if that changes we need to change it everywhere onebyone
// so we will use a variable

const now = 2037;

ageBelly = now - 2003;
ageConrad = now - 2000;


console.log("Age of Belly and Conrad is " + ageBelly + " and " + ageConrad);

// 2 different operations = multiplication, division , exponentiation
console.log(ageBelly * 2, ageBelly / 10, 2 ** 3);

// we can use plus operator to join strings (concatenate different strings)

const firstName = "conrad";
const lastName = "fisher";

console.log(firstName + " " + lastName);


// assignment operators

// equal to operator
// here 2 operators from which plus is getting executed before equal to , therefore x will be assigned 15 (based on operator precedence).
let x = 10 + 5;
console.log(x);

// equal to plus operator
// x = x + 50 i.e 15 + 50
x += 50;
console.log(x);
x *= 4;
console.log(x);

x++; //x= x+1;
console.log(x);


x--; //x= x-1;
console.log(x);

// comparison operators
// to compare and produce boolean values

// greater than 
console.log(ageBelly > ageConrad);

// greater than equal to
console.log(ageBelly);
console.log(ageBelly >= 18);

// we can be storing this comparison results in variables not only log if needed later.
console.log(ageConrad);

const is40OrPlus = ageConrad >= 40;
console.log(is40OrPlus);
console.log(typeof is40OrPlus); //automatically figures out variable is boolean as bcz of calculation.


console.log(now - 2003 > now - 2000);
// this above line is same as console.log(ageBelly > ageConrad);
// but will figure out how js knows what to do first between math(arithmatic) and comparison?
// its with the help of order of precedence.