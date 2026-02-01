// just like arrays objects can hold other other arrays and even objects inside objects.
// we know that functions are another type of value and if function is just a value,
// then that means we can create key value pairs in which value is a  function.
// that means we can add functions to the objects.


// object with a function as a key-value pair
const jonas = {
  firstName: 'jonas',
  lastName: 'harington',
  age: 2003,
  job: 'teacher',
  friends: ["peter", "steve", "michael"],
  hasDriverLicense: true,

  // we used to do a function like this 
  // const calcAge = function (birthYear) {
  //   return 2026 - birthYear;
  // }


  // instead we did below 
  // now , here calcAge is not a variable that stores a function but a property of jonas object
  // calcAge: function (birthYear) {
  //   return 2026 - birthYear;
  // }

  // here above this part is function expression 
  // function (birthYear) {
  //   return 2026 - birthYear;
  // }

  // bcz here we need function expression to create this method.(we cannot use function declrations)
  // any function that is attached to an object is called a method.

  // if we see carefully , we already have birthyear value - 2003 information in jonas object.
  // and writing it twice is not ideal(not DRY) and we might make mistake passing wrong year.
  // if we know birthyear is 2003 we should only write it once,
  //  only on one place bcz when we have to change we should be changing in one place only.

  // we could acutually access birth year property in our calcAge function (age: 2003)
  // directly from jonas obect.
  // this is done bcz in every method by a javascript we have access to
  //  a special variable called "this".
  // with this keyword we can read the birth year directly from object itself without
  // having to pass it in function as an parameter.
  // new version

  calcAge: function () {
    console.log(this); //this is the whole jonas object.
    return 2026 - this.age;
    // we could have done it as jonas.age but instead of 
    // hardcoding the object name we will pass the object reference.
  }
  // the this variable is equal to the object on which the method is called.
  // it is equal to the object calling the method.
  // here object calling the method is jonas
  // bcz outside the object we are accessing as jonas.calcAge();
  // that means inside this method the this variable or keyword will point to jonas.
};


// accessing calcAge property/method
console.log(jonas.calcAge());
console.log(jonas['calcAge']());
