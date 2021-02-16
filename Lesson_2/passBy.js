// function changeName(name) {
//   name = "bob"; // does this reassignment change the variable outside the function?
//   console.log(name);
// }

// function anotherFunction() {
//   let name = "jim";
//   changeName(name);
//   console.log(name); // => logs 'jim'
// }

// anotherFunction();

// function capitalize(names) {
//   return names.map(name => name[0].toUpperCase() + name.slice(1));
// }

// let names = ["chris", "kevin", "naveed"];
// capitalize(names); // returns ['Chris', 'Kevin', 'Naveed']
// console.log(names); // => ['chris', 'kevin', 'naveed']

// let a = 5;
// function add(a,b) {
//   a = a + b;
//   return a;
// }


// console.log(add(a,5));
// console.log(a);

//not from LS


// function replace(ref) {
//   ref = {};           // this code does _not_ affect the object passed
// }

// function update(ref) {
//   ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
// }

// let a = { key: 'value' };
// console.log(replace(a));  // a still has its original value - it's unmodfied
// console.log(update(a));   // the _contents_ of 'a' are changed

function bar(array) {
  return array;
}


let array = [1, 2, 3];
let newArray = bar(array);
console.log(array); 
console.log(newArray);
array.push(4);
console.log(array); 
console.log(newArray);

function foo(number) {
  return number;
}

let number = 1;
let newNumber = foo(number);
console.log(number === newNumber);