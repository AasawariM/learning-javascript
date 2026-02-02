// 2 things we will do
// loop over an array backwards
// create loop inside another loop


// PART 1

// conside jonas array
const jonas = [
  'jonas',
  'harington',
  2026 - 2000,
  'teacher',
  ["peter", "steve", "michael"],
  true
];
// we did
// 0,1,...,4

// now we will do
// 4,3,...,0
// looping over an above array backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// PART 2

// creating loop inside another loop
// gym example
// 15 repetitions , 5 for each of the 3 exercises
// will need loop inside another loop

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}