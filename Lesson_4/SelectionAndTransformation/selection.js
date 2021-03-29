//select the key-value pairs where the value is 'Fruit'.

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// function selectFruit (produceList) {
//  let fruitArray = Object.entries(produceList).filter(item => item[1] === 'Fruit');
  
//   return Object.fromEntries(fruitArray);
// }

// console.log(selectFruit(produce));
// console.log(produce)

//above  explanation
//Object.entries(produceList) turns the object into a nested array [[apple, "Fruit"], [carrot, "Vegetable"]] etc.
//so this is now the array that we are going to apply .filter() to.
//.filter() takes EITHER another named function  - for instance if we were returning an array from another function it could be
//    presented as .filter(theOtherFunction)
//OR it takes a written out function typically entered in arrow notation
//regardless, what its getting is the element from the array as the argument
//.filter((item) = > item[1] === 'Fruit')
  //what's happening here is its examining the first item in the array in this case, its a sub array.
  //its taking the second index int the subarray (item[1] and seeing if its "true" that it is === 'Fruit' filter is only returning 
  //true and false. 
  //  If this were not a nested array  // it would be written out like this (item => item === 'Fruit'

  //Here's another way to get the values - lets use vegetables though

  
  let produceKeyValues = Object.entries(produce);
  let onlyVegetables = {};
  
  produceKeyValues.forEach(keyValue => {
    let [ key, value ] = keyValue; //destructuring the keyValue array
    if (value === 'Vegetable') {
      onlyVegetables[key] = value;
    }
  });
  
  onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
