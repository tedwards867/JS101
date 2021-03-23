//Write a program that prompts the user for two positive integers, and then prints the results of the following 
//operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. 
//Do not worry about validating the input.

//*Understand
//? prompt user for two positive integers
//? calculate this list of operations on those two numbers and print out the results.

//* example
/*
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/

//
//* Data Structures
//?Input:  two integers
//? create function for each operation return values.
//? Main function displays the output of the helper functions 
//? store values in Object keys = type of operation, value = result


//*Algorithm
//? collect input from user for each value store
//?  SET Arithmetic operations object = {Input: [num1, num2], Operands [n,y],Operations..: 0}
//? in a for/in loop extract the values from in te input array
//Output: loop over object and display keys and values.

//* code

//assume user input for now


const readlineSync = require('readline-sync');
const prompt = '==> ';

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}
function exponent(num1, num2) {
  return num1 ** num2;
}

function displayArithmaticOperations() {

  console.log('Enter the first number:')
   num1 = parseFloat(readlineSync.question());

  console.log('Enter the second number:');
   num2 = parseFloat(readlineSync.question());

  console.log(`${prompt}${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`${prompt}${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`${prompt}${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(`${prompt}${num1} / ${num2} = ${parseInt(divide(num1, num2))}`);
  console.log(`${prompt}${num1} % ${num2} = ${remainder(num1, num2)}`);
  console.log(`${prompt}${num1} ** ${num2} = ${exponent(num1, num2)}`);

}

displayArithmaticOperations();