//Write a function that takes one integer argument, which may be positive, negative, or zero. 
//This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

/** 
**Understand the Problem
*? 
* @param - an integer (positive, negative or zero)
*? output: boolean 
*? returns true if absolute value is odd
* 

**Examples/Test Cases
  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17)); // => true
  console.log(isOdd(-8)); // => false
  console.log(isOdd(0)); // => false
  console.log(isOdd(7)); // => true
**Data Structures
**Algorithm
 create a function with integer parameter
 determine if absolute value of number is odd or even
 if odd, return true

**Code
*/

function isOdd(integer) {
  return Math.abs(integer) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true