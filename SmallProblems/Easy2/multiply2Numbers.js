//Create a function that takes two arguments, multiplies them together, and returns the result.

//*understand
//? create a function
//? 2 arguments
//? multiply the input
//? return the result

//*examples/test cases
//console.log(multiply(5, 3) === 15); // logs true

//*Datatypes
//*numbers

//*algorithm
//? valdate input is number
//? multiply the arguments
//? return the product

//*code



function multiply(num1, num2) {

  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2
  } 
  console.log('Your input was not valid.  Please only provide numbers');
}

// console.log(validateNumbers(3,5));
// console.log(validateNumbers('a',1))
// console.log(multiply(1,5))
console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(5, true) === 15); // logs false