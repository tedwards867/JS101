let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

//Add up all of the ages from the Munster family object:

let sumOfAges = Object.values(ages).reduce((sum, age) => sum + age);
console.log(sumOfAges)

//Pick out the minimum age from our current Munster family object:
let minimumAge = Object.values(ages)
console.log(Math.min(...minimumAge))

console.log(minimumAge)
console.log(...minimumAge)  //use of spread operator - extracts values from array and presents as a list of arguments
//into a function





