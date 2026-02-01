// object with a function as a key-value pair
const jonas = {
  firstName: 'jonas',
  lastName: 'harington',
  birthYear: 2003,
  job: 'teacher',
  friends: ["peter", "steve", "michael"],
  hasDriverLicense: true,


  // calcAge: function () {
  // return 2026 - this.birthYear;
  // }

  // new version
  calcAge: function () {
    // we calculated the age and created new property on the current object.
    // this.age notation is used here to create new property age on jonas object.
    this.age = 2026 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job},and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  }
  // in a template string we can do a function call like :
  // this.calcAge()
};
// accessing calcAge property/method
console.log(jonas.calcAge());

// lets say we need to access the age multiple times throughtout our program
// we could do this 
console.log(jonas.calcAge());
console.log(jonas.calcAge());
console.log(jonas.calcAge());
// its a bad practice to do this  multiple times as function will run 3 times
// to do the same calculation of 2026 - this.age;
// instead what we can do is
// calculate the age once and store it in object, and when needed later,
// we can just retrive the age as a property from the object.
// i.e we can use the this keyword also to store a new property.
// check above calcAge function's new version.
// and we can replace the function call above with simply request for the age property.
console.log("Jonas's age is ", jonas.age);

// small challenge : write a method called getSummary and this method should return a string,
// which should summerize the data about jonas here.
// getSummary method should be in object not like what i did below

// function getSummary() {
//   return `${jonas.firstName} is a ${jonas.age} old ${jonas.job} and he has ${jonas.hasDriverLicense ? "a" : "no"} driving license`;
// }


console.log(jonas.getSummary());
