// objects
// another data structure
// just like arrays we use objects to group together different variables that belong together.
// both arrays and objects used to store multiple elements/values in single variable/entity

const jonasArray = [
  "jonas",
  "harington",
  2026 - 2000,
  "teacher",
  ["peter", "steve", "michael"]
];

// this is jonas array in which we know we have firstname,lastname,age,job,and friends listed array
// in arrays there is no way of giving this elements a name.
// so we cant reference the elements by name but only by their order number in which they appear in the array.
// to solve this problem we have another data structure in js called objects.

// so in objects we define key value pairs.
// with which we can give each element/value a name.

// we use curly brackets for creating objects
// {} are filled with key value pairs seperated with commas
// key is the variable name
// value is the actual value of any type we want
const jonas = {
  firstname: 'jonas',
  lastname: 'harington',
  age: 2026 - 2000,
  job: 'teacher',
  friends: ["peter", "steve", "michael"]
};

// so this is jonas object with 5 key-value pairs.
// keys are also called as properties.
console.log(jonas);

// there are many ways of creating objects
// above way is simplest way of creating objects using {},called object literal syntax.

// Big difference in objects and arrays is that
// in objects the order of values doesnt matter when we want to retrieve them.
// in arrays order in which we specify elements matters a lot.
// so we only access array elements using their order number.
// i.e
// arrays = for ordered data
// objects = used for unstrctured data,and data that we wants to name and then
//  retrieve from the object based on that name.

// how to get data from an object?
