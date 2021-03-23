//The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.
//Write a function that takes a String of digits, and returns the appropriate number as an integer. 
//You may not use any of the methods mentioned above.
//For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.
//You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). 
//Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

//*understand
//? consume a STRING of digits and return the corresponding integer
//? do not use built in conversions
//? you must analyze the characters in the string.

//test cases
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

//*data structures
//? input: string
//? return: integer
//*algorithm
//? split string 
//? convert char to char code
//? psuh char value to new array
//? return joined values

function stringToInteger(stringOfNumbers) {
  let stringArray = stringOfNumbers.split('');
  let charCodeArray = [];
  let newValue = 0;
  for (let i = 0; i < stringArray.length; i += 1) {
    charCodeArray.push(stringArray[i].charCodeAt() - 48);
    newValue = newValue * 10 + charCodeArray[i];
    console.log(newValue, charCodeArray[i]);
  }
  return newValue;
}

console.log(stringToInteger("4321"))
//console.log(stringToInteger("4321") === 4321); // logs true
//console.log(stringToInteger("570") === 570); // logs true

// i didn't solve this one ^^.  .join('') returns a string (duh '');

//below is what they were looking for.
//split to individual chars (got that part)
//then map to an 'transformational object'

function stringToInteger2(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToInteger2("4321") === 4321); // logs true
console.log(stringToInteger2("570") === 570); // logs true

//Further Exploration
//Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number to its integer value. 
//Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) 
//correspond to decimal values of 10-15.


function hexadecimalToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };
  let arrayOfDigits = string.toUpperCase().split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (16 * value) + digit));
  return value;
}

console.log(hexadecimalToInteger('4D9f'));
console.log(hexadecimalToInteger('4D9f') === 19871);