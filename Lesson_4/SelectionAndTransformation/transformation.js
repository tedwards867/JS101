let myNumbers = [1, 4, 3, 7, 2, 6];


  // function doubleNumbers(numbers) {
  //   let doubledNums = [];
  //   let counter = 0;

  //   while (counter < numbers.length) {
  //     let currentNum = numbers[counter];
  //     doubledNums.push(currentNum * 2);

  //     counter += 1;
  //   }

  //   return doubledNums;
  // }
  
  //implement a solution that mutates the original array during transformation
//   function doubleNumbers(numbers) {
  
//     let counter = 0;

//     while (counter < numbers.length) {
//       let currentNum = numbers[counter];
//       numbers[counter] = currentNum * 2;

//       counter += 1;
//     }

//     return numbers;
//   }

// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [2, 8, 6, 14, 4, 12]


//Here's an exercise for you: suppose we wanted to transform the numbers based on their position in the array rather than their value? Try coding a solution that doubles 
//the numbers that have odd indices:

function doubleOddIndices(numbers) {
  let doublOddInd = [];

  for (let i = 0; i < numbers.length; i += 1) {
    let currentValue = numbers[i];
    let currentInd = numbers.indexOf(currentValue);

    if (currentInd % 2 !== 0) {
      doublOddInd.push(numbers[i] * 2);
    } else {
      doublOddInd.push(numbers[i])
    }    
  }
  return doublOddInd;
}


console.log(doubleOddIndices(myNumbers));  // => [ 1, 4, 3, 7, 2, 6 ] > [1, 8, 3, 14, 2, 12]

//let's update our doubleNumbers function so that it not only can double the numbers in an array but can also multiply 
//them by any other number. For instance, let's create a function called multiply that can take an additional argument to 
//determine the transformation criterion.
function multiply(numbers, multiplier) {
  let multipledNums = [];
  let counter = 0;

    while (counter < numbers.length) {
      let currentNum = numbers[counter];
      multipledNums.push(currentNum * multiplier);

      counter += 1;
    }  
  return multipledNums;
}
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18])

//Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

//P: count the number of times a letter appears in the phrase.  Results are case sensitive.
//E: { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
//D: string as input, object as output
//A: 
//?create an empty object
//?iterate over the string
//?for each unique letter, create a key
  //* if (char is not key in Object then char[] = )
//?for each instance of the letter increment the value of that key
//C


function countLetters(sentence) {
  let letterObj = {};
  let sentenceArray = sentence.split('').filter(elem => elem != ' ')  // i got this part right
 

  sentenceArray.forEach(elem => {   // i got this part right
   
    letterObj[elem] = letterObj[elem] || 0;  /// i didn't get this part forward though
    letterObj[elem] += 1;
    
  });


  return letterObj
  }
console.log(countLetters(statement))
// arr.forEach((currentValue, indexOfCurrentValue) => {
//   newObj[currentValue] = indexOfCurrentValue;
// });
// sentence.forEach(elem => {
//   if(elem) {
//    Object.value(letterObj) =  Object.value(letterObj) + 1
//   }
// });
