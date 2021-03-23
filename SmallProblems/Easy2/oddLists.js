//Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. 
//The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

//* understand
//? pass in an array
//? return an array taht contains the odd indexed elements
//? what if array has only 1 element
//? what if array is empty

//*examples/test cases


//* data structures
//? input: array
//? output new array

//* algorithm
//? declare a new array 
//? if input array.length === 0 break?
//?   loop over given 
//?   if index % 2 === 0 continue
//? push value at index to new array.
//? return new array

//* code

function oddities(array) {
 let newArray = [];

 for (let i = 0; i < array.length; i += 2) {
  newArray.push(array[i]); 
 }
 return newArray; 
}
  


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function evenlies(array) {
  let newArray = [];
 
  for (let i = 1; i < array.length; i += 2) {
   newArray.push(array[i]); 
  }
  return newArray; 
 }
 
 console.log(evenlies([2, 3, 4, 5, 6]));


