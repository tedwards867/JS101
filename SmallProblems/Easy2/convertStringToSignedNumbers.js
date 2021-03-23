// In the previous exercise, you developed a function that converts simple numeric strings to integers. 
//In this exercise, you're going to extend that function to work with signed numbers.
// Write a function that takes a string of digits, and returns the appropriate number as an integer. 
//The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; 
//if it is a -, your function should return a negative number. If no sign is given, you should return a positive number.
// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). 
//You may, however, use the stringToInteger() function from the previous lesson.



function stringToSignedInteger(stringOfNumbers) {
  let stringArray = stringOfNumbers.split('');
  let charCodeArray = [];
  let newValue = 0;
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[0] === '+' || stringArray[0] === '-') {
      stringArray = stringArray.splice(1,stringArray.length -1)
    } 
    charCodeArray.push(stringArray[i].charCodeAt() - 48);
    newValue = newValue * 10 + charCodeArray[i];
  
  }
  if (stringOfNumbers.split('')[0] === '-'){
    return newValue = newValue * -1
  }
  return newValue;
}

// or
function stringToInteger(string) {
  let stringArray = string.split('');
  let charCodeArray = [];
  let newValue = 0;
  for (let i = 0; i < stringArray.length; i += 1) {
    charCodeArray.push(stringArray[i].charCodeAt() - 48);
    newValue = newValue * 10 + charCodeArray[i];
    //console.log(newValue, charCodeArray[i]);
  }
  return newValue;
}

function stringToSignedInteger2(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}



//console.log(stringToSignedInteger("4321"))// === 4321); // logs true
console.log(stringToSignedInteger2("-570"))//  === -570); // logs true
console.log(stringToSignedInteger2("+100") )// === 100); // logs true44Mom'sMo

