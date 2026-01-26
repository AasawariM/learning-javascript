// considering previous example

// const yearsUntilRetirement1 = (birthY, firstName) => {
//   const age = 2026 - birthY;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }
// const data1 = yearsUntilRetirement1(2003, "Conrad");
// console.log(data1);

// convert it to normal function expression
// const yearsUntilRetirement1 = function (birthY, firstName) {
//   const age = 2026 - birthY;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }
// const data1 = yearsUntilRetirement1(2003, "Conrad");
// console.log(data1);

// we will create another small function to calculate age and use it for above function

const calcAge = function (birthYear) {
  return 2026 - birthYear;
}

const yearsUntilRetirement1 = function (birthY, firstName) {
  const age = calcAge(birthY);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement; //after returning the value,return statement immediately exits the function.
  }
  else {
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
}
const data1 = yearsUntilRetirement1(2006, "Conrad");
console.log(data1);

const data2 = yearsUntilRetirement1(1940, "Mike"); // negative no means already retired.
console.log(data2);