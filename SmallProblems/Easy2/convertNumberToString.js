//In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 
//In this exercise and the next, you're going to reverse those functions.
//Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.
//You may not use any of the standard conversion functions available in JavaScript, such as String(), 
//Number.prototype.toString, or an expression such as '' + number. 
//Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

//*understand
//? convert a number to a string 

function integerToString(integer) {
  let numString = integer.toFixed(0)
  return numString;
}

function integerToString2(integer) {
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

  for(let count = 0; count < (Math.ceil(Math.log10(integer))); count += 1) {
    let remainder = Math.floor(integer % 10)
    let stringNum;


    }
    return array;
}



// console.log(integerToString2(4321));      // "4321"
// console.log(integerToString2(0));         // "0"
// console.log(integerToString2(5000));      // "5000"
// console.log(integerToString2(1234567890));      // "1234567890"

// console.log(integerToString2(4321) === '4321');      // "4321"
// console.log(integerToString2(0) === '0');         // "0"
// console.log(integerToString2(5000) === '5000');      // "5000"
// console.log(integerToString2(1234567890) === '1234567890');      // "1234567890"

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToStringLS(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}


//console.log(integerToStringLS(-4321))// == "4321");      // "4321"
//console.log(integerToStringLS(0) === '0');         // "0"
//console.log(integerToStringLS(5000) === '5000');      // "5000"
//console.log(integerToStringLS(1234567890) === '1234567890');   

//THIS exercise was frustrating since the solution does exactly what we were told not to do which is don't add an empty string
//to a number to get the results...  I provided feedback.

// console.log(Math.sign(4321)); //1
// console.log(Math.sign(-4321)) //-1
// console.log(Math.sign(0)) //0
// console.log(Math.sign(-0)) //-0
// console.log(0 === -0)

function signedIntegerToString(integer) {
  let sign = Math.sign(integer);
  switch (sign) {
    case 1:
      return '+' + integerToStringLS(integer);
      break;
    case -1:
     return  '-' + integerToStringLS(Math.abs(integer));
    default:
      return integerToStringLS(integer);
      
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "0");