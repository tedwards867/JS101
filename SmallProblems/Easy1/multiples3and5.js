//Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. 
//For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

//You may assume that the number passed in is an integer greater than 1.

//* Understand
//? computer sum of range of numbers, inclusive, that are multiples of 3 or 5.
//? multiple means can be divided evenly between 3 or 5
//? start range = 1, end range = provided input
//? assumption - end range > 1

//* examples
// console.log(sumMultiples(3)); //3
// console.log(sumMultiples(5)); //8 (3 + 5)
// console.log(sumMultiples(10))// 33 (3 + 5 + 6 + 9 + 10)

//* data structures
//* input: number
//* output: number

//* algorithm
//? for range of values between 1 and input, determine if multiple of 3  or 5 and if so, sum

function sumMultiples(endRange) {
  let total = 0;
  for (let i = 1; i <= endRange; i +=1) {
    if (i % 3 === 0 || i % 5 === 0){
    total += i;
    }
  }
  return total;
}


console.log(sumMultiples(3)); //3
console.log(sumMultiples(5)); //8 (3 + 5)
console.log(sumMultiples(10))// 33 (3 + 5 + 6 + 9 + 10)