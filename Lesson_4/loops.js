
// let numberOfPetsOriginal = {
//   dogs: 2,
//   cats: 4,
//   fish: 1
// }
// let numberOfPets = Object.create(numberOfPetsOriginal);
// numberOfPets.alpaca = 3;
// numberOfPets.cows = 7;
// numberOfPets.chickens = 15;

// let pets = Object.keys(numberOfPets);
// let counter = 0;

// while (counter < pets.length)  {
//   let currentPet = pets[counter];
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`while loop: I have ${currentPetNumber} ${currentPet}!`);
//   counter += 1;
// }


// for (let currentPet in numberOfPets) {
//   let currentPetNumber = numberOfPets[currentPet];
//   console.log(`forIn Loop: I have ${currentPetNumber} ${currentPet}!`);
// }

let numbers = [1, 2, 3, 4];
let index = 0;

while (index < numbers.length) {
  numbers[index] +=1;
  index +=1;
}

console.log(numbers)

function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}

console.log(testBreak(3))

let alphabet = 'abcdefgh      ijklmnopqrstuvwxyz';

function whileLoop(string) {
let count = 0;
while (count < string.length) {
  console.log(string[count])
  count += 1;
  }
}

function forLoop(string) {

    for(let count = 0; count < string.length; count +=1) {
    if(string[count] === ' ') continue;
    console.log(string[count])
  }
}


let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length)  {
  let currentPet = pets[counter];  //this sets currentPet equal to the key value for the index(counter)
  let currentPetNumber = numberOfPets[currentPet]; //this sets the petNumber = Value associated with the 'current' pet
 // console.log(`I have ${currentPetNumber} ${currentPet}!`);

 console.log(`I have ${numberOfPets[currentPet]} ${Object.keys(numberOfPets)[counter]}!`)
  
  counter += 1;
}

console.log(pets[0]) 
console.log(Object.keys(numberOfPets)[0])
console.log(numberOfPets['dogs'])