//Write a program that uses this array to create an object where the names are the keys and the values 
//are the positions in the array:

//*Understand
//create an object where the names are the keys and the values are the positions in the array

//*examples/test Cases
//! output: { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

//*datatypes
//? Input: array
//? Output: Object

//*algorithm
//? create an empty object
//? create a new array
//? Loop over array and push element value and element index into subArrays
//? update empty object from new Array

//*code

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintyArray = []
let flintyObject = {};

for(const property in flintstones) {
 let value = flintstones[property];
  flintyObject[value] = flintstones.indexOf(value)
}

//or
// flintstones.forEach((name, index) => {
//   flintyObject[name] = index;
// });

console.log(flintyObject)

//Add up all of the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


let sumOfAges = Object.values(ages).reduce((sum, age) => sum + age)
console.log(sumOfAges)

console.log(Math.min(...Object.values(ages)))

//Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";   //--> { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let flintObj = {};
let statementArray = statement.split('').filter(char => char !== ' ')

for(property of statementArray) {
  flintObj[property] = flintObj[property] || 0; 
  // if you set this to 0 then in every iteration it resets to 0 then adds 1.   with it being set to itself ||0
  //then in the first iteration its being set to 0 for all of them (instead of undefined) but on subsequent iterations
  //its holding on to the previously incremented value so then if it encounters the key again, its actually adding 1 to 1.
  flintObj[property] += 1;
}
console.log(flintObj)

let stuffObj = {
  thing1: 'comb',
  thing2: 'brush',
  thing3: 'wand'
}

stuffObj['thing7'] = stuffObj['thing7'] || 0
stuffObj['thing7'] +=1;
stuffObj['thing7'] +=1;

stuffObj['thing8'] = 0
stuffObj['thing8'] +=1;
stuffObj['thing8'] +=1;
console.log(stuffObj)