// while loop
// another type of loop

// difference between for and while loop


// console.log("FOR LOOP");

// for (let i = 0; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);
// }
// same thing done using while loop

// same as for loop will still need counter to print current value 
// still need the condition for where to stop,
// still need to increase/decrease the counter 

// but for while loop we only specify the condition
// we need to explicitly need to define 2 other components,the counter's initial value and inc/dec
// will do counter initialization outside the while loop 
// will inc/dec the counter at the end of the iteration

console.log("WHILE LOOP");

let j = 1;
while (j <= 10) {
  console.log(`Lifting weights repetition ${j}`);
  j++;
}

// while loop doesnt need counter all the time , it needs is condition,which can be anything and it doesnt
// have to be related to any counter at all .

// problem without any counter dependency / without number that is increasing
// example
// roll a dice until the roll is six.
// here we not know beforehand how many times the loop should run
// so we dont need a counter variable here 
// let dice = Math.trunc(Math.random() * 6); //0 to 5
let dice = Math.trunc(Math.random() * 6) + 1; //0 to 6
console.log(dice);

while (dice !== 6) {
  console.log("you rolled ", dice);
  //reassgin dice value to a new value at the end of each iteration
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end");
}
// when dice is 6 right away in the beginning then the loop will have exaactly zero iterations,
// thus, it will never start.

// conclusion
// while loop doesnt really have to depend on any counter variable.
// one can use while loop when you dont know beforehand how many iterations the loop will have,
// that is when counter variable is not needed.

// in arrays we know how many elements does it have (using length) so that is why for loop is ideal for arrays.


