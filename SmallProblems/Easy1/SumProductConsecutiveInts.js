//Write a program that asks the user to enter an integer greater than 0, 
//then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

//*Understand
//? prompt user for an integer > 0 
//? prompt user to perform sum or product on integer
//? return math request on the range of numbers 1 - input

//*examples
//? user enters 5, sum --> 15 (1 + 2 + 3 + 4 + 5)
//? user enters 5, product --> 120 ( 1 * 2 * 3 * 4 * 5)

//*algorithm
//? request number input from user and convert to parseInt()
//? request operand from user.
//? loop over numbers 1 through input and perform the requested operation.
//? display the numbers used and the final output

//*code
//? separate methods to calculate sum and product with number as param


const readlineSync = require('readline-sync');

function calculateSumOfRange(endInteger) {
  let total = 0;
  for (let i = 1; i <= endInteger; i +=1) {
    total = total + i;
  }
  return total;
}

function calculateProductOfRange(endInteger) {
  let total = 1;
  for (let i = 1; i <= endInteger; i +=1) {
    total = total * i;
  }
  return total;
}

function calculateIntegers() {
  console.log(`Please enter an integer greater than zero\n`)
  let endInteger = parseInt(readlineSync.question());

  while (endInteger < 1){
      console.log('That is not a valid number. Please enter an integer greater than zero\n');
      endInteger = parseInt(readlineSync.question());
    }

  console.log(`Enter 's' to compute the sum of numbers 1 through ${endInteger} or 'p' to compute the product\n`);
  let operand = readlineSync.question().toLowerCase();

  while (!(operand === 'p' || operand === 's')) {
    console.log(`That is not a valid operand. Please enter an 's' or 'p'\n`);
    operand = readlineSync.question().toLowerCase()
  }

  if (operand === 's') {
    let sum = calculateProductOfRange(endInteger)
    console.log(`The sum of the integers between 1 and ${endInteger} is ${sum}.`)
  } else if (operand === 'p'){
    let product= calculateProductOfRange(endInteger)
    console.log(`The product of the integers between 1 and ${endInteger} is ${product}.`)
  };

}

calculateIntegers();