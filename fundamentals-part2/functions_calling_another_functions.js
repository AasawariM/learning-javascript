
// consider the previous example
// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} and ${oranges}`;
//   return juice;
// }

// lets consider that fruit processor can only make juice with smaller fruit pieces.
// therefore before making the juice ,the fruit processor needs another machine that
// first cuts the fruits that we give it into multiple smaller pieces. 

function cutFruitPieces(fruit) {
  return fruit * 4; //cutting fruit into 4 multiple pieces (returns a number of pieces)
}

// now in fruit processor machine we will use above created function
function fruitProcessor(apples, oranges) {

  // calling cutFruitPieces function inside this fruitProcessor function 

  const applePieces = cutFruitPieces(apples); // this apples arugement will replace the fruit parameter in function cutFruitPieces.
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${apples} apples cut into ${applePieces} pieces and ${oranges} oranges cut into ${orangePieces} pieces`;
  return juice;
}
console.log(fruitProcessor(2, 3));

