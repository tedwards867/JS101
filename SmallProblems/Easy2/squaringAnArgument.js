//Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument 
//(the square is the result of multiplying a number by itself).

//*Understand
//? call the multiply function into a new function 'square'
//?  the multiple method takes two arguments and the square method takes one.

//*examples
// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

//* Datatypes - numbers
//*algorithm
//? apply the input from square to the input both of multiply's arguments

function multiply(num1, num2) {

  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2
  } 
  console.log('Your input was not valid.  Please only provide numbers');
}
function square(numberToSquare) {
  return multiply(numberToSquare, numberToSquare);

}
// 
// function powerTo(number, power) {
//   if (power > 0) {
//   return(multiply(number, 1) ** power);
//   }
//   return console.log('Power must be greater than zero');
// }

function powerTo(number, power) {
  
  return(multiply(number, 1) ** power);

}

console.log(powerTo(5,2))
console.log(powerTo(5,0))
console.log()