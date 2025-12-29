// switch Statement
// alternative way of writing complicated if-else statement,
//  where we want to compare one value with multiple options.

const day = prompt('Enter day: ');
switch (day) {
  case 'monday': //day === 'monday' (strict equality comparison)
    console.log("plan for week");
    console.log("plan day and night");
    break;
  case 'tuesday':
    console.log('go to office');
    break;
  // when we want to run same code for 2 different values
  case 'wednesday':
  case 'thursday':
    console.log('work from home');
    break;
  case 'friday':
    console.log('pending work');
    break;
  case 'saturday':
    console.log('binge watch');
    break;
  case 'sunday':
    console.log('enjoy the weekend!');
    break;
  // executed only when all other cases fail
  // in this example for invalid week days
  default: {
    console.log('not a valid day');
  }
}
//without break the code continues to execute and stop where there is break keyword.
// so after each block we have to tell it to stop essesntially by adding break.
//switch statement was designed for equality and not for comparison stuff (its possible but not a goal).


// do same above example implementation but now with if-else block

if (day === "monday") {
  console.log("plan for week");
  console.log("plan day and night");
}
else if (day === "tuesday") {
  console.log('go to office');
}
else if (day === "wednesday" || day === "thursday") {
  console.log('work from home');
}
else if (day === "friday") {
  console.log('pending work');
}
else if (day === "saturday") {
  console.log('binge watch');
}
else {
  console.log('not a valid day');
}

// in if-else block we can see we have lots of repetitive code whereas switch code is readable.
