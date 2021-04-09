let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let veggies = {}

produceKeyValues.forEach(keyValue => {
  let [ key, value] = keyValue;
  if (value === 'Vegetable') {
    veggies[key] = value;
  }
});

console.log(veggies)