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
  calcAge: function (birthYear) {
    return 2026 - birthYear;
  }

  // here above this part is function expression 
  // function (birthYear) {
  //   return 2026 - birthYear;
  // }

  // bcz here we need function expression to create this method.(we cannot use function declrations)
  // any function that is attached to an object is called a method.
};

// accessing calcAge property/method
console.log(jonas.calcAge(2003));

// we can also access this method using [] notation
console.log(jonas['calcAge'](2003));
// here  function is jonas['calcAge']
// calling it will need (2003)
