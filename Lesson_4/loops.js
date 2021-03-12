
let numberOfPetsOriginal = {
  dogs: 2,
  cats: 4,
  fish: 1
}
let numberOfPets = Object.create(numberOfPetsOriginal);
numberOfPets.alpaca = 3;
numberOfPets.cows = 7;
numberOfPets.chickens = 15;

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length)  {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`while loop: I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}


for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`forIn`Loop: I have ${currentPetNumber} ${currentPet}!`);
}