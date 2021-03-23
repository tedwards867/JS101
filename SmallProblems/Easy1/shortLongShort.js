//Write a function that takes two strings as arguments, determines the longer of the two strings, 
//and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. 
//You may assume that the strings are of different lengths.

//*Understand
//? Input: two strings
//? Evaluate: which of the two strings is longer
//? Return the concatenation of the strings shorter, longer, shorter.
//? Givens: strings are different lengths.

//* Examples

// concatStrings('lmnop','abc'); //abclmnopabc
// concatStrings('hello', 'its me again');//helloitsmeagainhello

//*Data Structures
//? Strings

//*algorithim
//?collect input from user  - convert input to string
//?function to etermine length of string/
//? concat strings shortLongShort

//*code

const readlineSync = require('readline-sync');


function concatStrings() {
console.log("Let's concatenante some strings!   Please enter the first string.\n");
let string1 = readlineSync.question();

console.log("Please enter another string. \n");
let string2 = readlineSync.question();


if (string1.length > string2.length) {
  console.log(string2 + string1 + string2);
  } else {
    console.log(string1 + string2 + string1)
  }
}
concatStrings(); //abclmnopabc
concatStrings();//helloitsmeagainhello

