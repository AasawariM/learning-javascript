'use strict';

// imp change strict mode introduces
// example


let hasDriversLicense = false; // let used as later value is gonna change
const passTest = true;  // const use to avoid accidental errors

// logic is when user pass the test make value of hasDriverLicense to true

if (passTest) hasDriverLicense = true; // wrong spelling of hasDriversLicense (making error)
if (hasDriversLicense) console.log("I can drive");


// without strict mode  we not gonna get anything in console
// error msg with strict mode help us understand whats wrong in our code.



// here this will work but its wrong as interface is reserved keyword
const interface = "Audio";
console.log(interface);

// strict mode introduces a short list of variable names that are reserved for features that
// might be added to the language a bit later.

// another example
const private = 4323;
// private keyword might be used in future for fields and classes.