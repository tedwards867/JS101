//*Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

//*Understand
//? range of numbers between 1 and 99 inclusively
//? write each number on a new line

//* Examples/Test Cases
//*DataStructures
//*Algorithm
//? set starting number = 1
//? loop over numbers inclusively to 99
//? determine if number is odd
//? console.log each odd number to a new line

function printOddNumbers() {
  for (let i = 1; i <= 99; i +=1) {
    if (i % 2 === 1) {
      console.log(i)
    }
  }
}
//printOddNumbers();

function printOddNumbers2(startNum, endNum) {
  let currentNum = startNum; 
  while(currentNum <= endNum) {
   if (currentNum % 2 === 1) {
    console.log(currentNum)
    }
    currentNum  +=1;
  }
}
printOddNumbers2(33, 98);