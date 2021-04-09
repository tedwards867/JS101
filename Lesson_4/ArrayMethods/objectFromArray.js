//Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }




//totally over thought this.  this is LS's solution

let flintstonesObj = {};
flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
})

console.log(flintstonesObj);

let arr = flintstones;
let newObj = {}

arr.forEach((currentValue, indexOfCurrentValue) => {
  newObj[currentValue] = indexOfCurrentValue;
});
console.log(newObj);