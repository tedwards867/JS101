let myString = 'This is my string';
let myArray = [ 1, 2, 3]
let myObj = {
  key1: 0, 
  key2: 'words'
}

//myString.slice(-3)

//console.log(myString.slice(-3, -3))

//destructuring + find
const objResult = Object.entries(myObj).find( ([key]) => key === 'key2' );
console.log(objResult) 


const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const inventory2 = [
  ['apples, 2'],
  ['bananas', 0],
  ['cherries', 5]
]

const result = inventory.find( ({name}) => name === 'cherries' );
console.log(result) 

const result2 = inventory2.find(([, quantity]) => quantity === 5)

console.log(result2)

function sum(a, b) {
    return a + b
}

let myNums = [ 1, 2, 3, 4, 5, 6]
console.log(myNums.includes(sum(1,2)));
