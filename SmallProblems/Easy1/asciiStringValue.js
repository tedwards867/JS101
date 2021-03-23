//Write a function that determines and returns the ASCII string value of a string passed in as an argument. 
//The ASCII string value is the sum of the ASCII values of every character in the string. 
//(You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

//* Understand
//? create a function with a string argument
//? return the value of the string argument( the sum of the values of each char in the string)
//?use String.prototype.charCodeAt() to get the value of each character

//* test cases

// console.log(asciiValue('Four score'));         // 984
// console.log(asciiValue('Launch School'));      // 1251
// console.log(asciiValue('a'));                  // 97
// console.log(asciiValue(''));                   // 0

//* datastructures
//? input: string
//? output: number

//*algorithm
//? SET totalValue;
//?iterate over each letter in string and get String.prototype.charCodeAt().
//? add each value to total

//* code

function asciiValue(string) {
  let totalValue = 0;
  let stringArray = string.split('');

  for( let i = 0; i < stringArray.length; i += 1) {
  
    totalValue += stringArray[i].charCodeAt();
  }
  return totalValue;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0