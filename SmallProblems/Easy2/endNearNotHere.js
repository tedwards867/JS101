//Write a function that returns the next to last word in the String passed to it as an argument.
//Words are any sequence of non-blank characters.
//You may assume that the input String will always contain at least two words.

//*understand
//find the next to the last word in a string
// a word is defined as any sequence of non-blank characters. ie.. not a space'
//trim off trailing spaces

//*examples
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true
// console.log(penultimate("Launch School is great! ") === "is"); // logs true
//*data structures
//? string input
//? convert to array

//*algorithm
//? trim spaces off of the end of string
//? convert to an array with slice('')
//?extract value from array.length -2 as index

//*further exploration
//Suppose we need a function that retrieves the middle word of a phrase/sentence. 
//What edge cases need to be considered? How would you handle those edge cases without ignoring them? 
//Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

//* understand
//find the middle word in a sentence
//what if there are an even number of words?
//



function penultimate(string) {
  let stringArray = string.trim().split(' ');
  return stringArray[stringArray.length - 2];
}



function middleWord(string) {
  let stringArray = string.trim().split(' ');
  let hasMiddleIndex = (stringArray.length / 2) % 2 !== 0;
  if (stringArray.length > 1)  
    if (hasMiddleIndex) {
        return stringArray[Math.floor(stringArray.length / 2)];
      } 
  return console.log("Sorry, your string doesn't have a middle word.")
}

//middleWord('This is an odd number of words')
console.log(middleWord('This is an odd number of words.') === "odd"); // logs true
//middleWord('This string has an even number of words')// return "sorry,."

console.log(middleWord('This'))
console.log(middleWord(''))