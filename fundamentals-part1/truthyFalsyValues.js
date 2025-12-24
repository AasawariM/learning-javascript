// we know js can only convert to 3 types =  to number , to string and to boolean
// we already did // type conversion and type coercion of strings and numbers

// for booleans
// concept of truthy and falsy values
// falsy values are values that are not exactly false but will become false when we try to convert them into a boolean.

// in js we have only 5 falsy values.
// 0  ,  ''  ,  undefined  ,  null  ,  NaN.

// all this 5 values arent false initially but will become when converted them to boolean.

// eveyrthing else are truthy values = values that will be converted to true
// eg: any non-zero number or a non-empty string.

// explicit or mannual type conversion
console.log(Boolean(0)); // 0
console.log(Boolean(undefined));
console.log(Boolean('Steve')); //non-empty string
console.log(Boolean({})); //empty object
console.log(Boolean('')); //empty string

// this is how we convert the values into booleans.
// but in pratice, the conversion to boolean is always implicit and not explicit.i.e always type coercion.

// scenarios in which js does type coercion to booleans
// 1) logical operators.
// 2) logical context like in condition of if else statement.

//how type coercion works in if else condition.
// example:

const money = 0; //a falsy value 
if (money) {
  console.log("Don't spend it all!");
}
else {
  console.log("You should get a job!");
}

// else block got executed here
// but why it works
// we know money is a number = 0
// in logical context of an if else condition ,in () js will try to coerce any value into a boolean.
// anything we put inside () which is not boolean js will try to convert it to a boolean.
// this happens using truthy and falsy values.
// we know money = 0 = falsy value = false
// if we change money value from 0 to any other value,condition will be true and if block will get executed.


// another usecase
let height;

if (height) {
  console.log("YAY! Height is defined");
}
else {
  console.log("height is undefined");
}

// here undefined is value of height as unassigned therefore it is a falsy value.
// thus, the height variable in this logical context is converted to boolean.
// height's value = undefined = falsy value = false value.
//else block is exeuted.
// when we assign something to height variable, if block got executed as condition will become true.

//but the problem here is when we assign 0 value to the height variable,
//we get else block executed why bcz,
// 0 is a falsy value.
// but here it is kind of an error or a bug.
// we only wanted scenario that the height is either defined or not and we didnt think about height = 0.
// we can fix this type of problem using logical operators.
