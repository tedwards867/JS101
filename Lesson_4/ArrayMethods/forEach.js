let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
let produceKeyValues = Object.entries(produce);
// produceKeyValues contains:
//   [['apple', 'Fruit'],
//    ['carrot', 'Vegetable'],
//    ['pear', 'Fruit'],
//    ['broccoli', 'Vegetable']]

produceKeyValues.forEach(keyValue => {
  //let [ key, value ] = keyValue; // this is called array destructuring assignment.
  //this is so we can give each element in the subarray a variable name that's used in the 
  //console.log statement.  or ic could be

  //console.log(`${key} is a ${value}`); //this uses the destructured array
  console.log(`${keyValue[0]} is a ${keyValue[1]}`); //this uses the undestructured array.
});
// either console statement will log:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable