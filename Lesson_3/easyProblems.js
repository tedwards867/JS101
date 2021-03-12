//---------------------------------------------------------------------------------------------
//*Add entries for Marilyn and Spot to the object:
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };


// ages = Object.assign(ages, additionalAges)

// //ages.additionalAges = additionalAges; //this adds a child object to ages
// console.log(ages);

//---------------------------------------------------------------------------------------------
// *Determine whether the name Dino appears in the strings below -- check each string separately):
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));
//---------------------------------------------------------------------------------------------
//*How can we add the family pet, "Dino", to the following array?
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push('Dino', 'Pookey');
// console.log(flintstones);
//---------------------------------------------------------------------------------------------
//*Return a new version of this sentence that ends just before the word house. Don't worry about 
//*spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// //hack way
// let fillInTheBlankAdvice = advice.substring(0,38)
// console.log(fillInTheBlankAdvice);

// //better way
// let betterAdvice = advice.substring(0,advice.indexOf('house'));
// console.log(betterAdvice);


// Expected return value:
// => 'Few things in life are as important as '

//---------------------------------------------------------------------------------------------
//*Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// let newAdvice = advice.replace('important', 'urgent');
// console.log(newAdvice);

// let replaceAll = 'Update the word that is repeated in this sentence.  repeated.'

// replaceAll = replaceAll.replaceAll('repeated', 'updated')
// console.log(replaceAll);

//---------------------------------------------------------------------------------------------
// *The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort 
//*can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the 
//*original array as shown below. Write two distinct ways of reversing the array without mutating the 
//*original array. Use reverse for the first solution, and sort for the second.

// let numbers1 = [1, 2, 3, 4, 5];
// newNumbers1 = numbers1.slice().reverse();  .slice() creates a copy
// console.log(`numbers1: ${numbers1}`)
// console.log(`newNumbers1 ${newNumbers1}`); // [ 5, 4, 3, 2, 1 ]

// let numbers2 = [1, 2, 3, 4, 5];
// newNumbers2 = numbers2.sort((num1, num2) => num2 - num1);   //this still mutates the original array.
// console.log(`numbers2: ${numbers2}`)
// console.log(`newNumbers2 ${newNumbers2}`);


// let numbers3 = [1, 2, 3, 4, 5];
// let newNumbers3 = [...numbers3].sort((num1, num2) => num2 - num1)  //spread operator makes a copy

// console.log(`Numbers3: ${numbers3}`);
//---------------------------------------------------------------------------------------------
//*Given a number and an array, determine whether the number is included in the array.

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];



// let number1 = 8;  // false
// let number2 = 95; // true
// console.log(numbers.includes(number1))
// console.log(numbers.includes(number2));

//---------------------------------------------------------------------------------------------
//*show two different ways to put the expected "Four score and " in front of famous words.

// let famousWords = "seven years ago...";

// let famousWordsStringConcat = "Four score and " + famousWords;
// console.log(famousWordsStringConcat);

// let famousWordsMethodConcat = "Four score and ".concat(famousWords);

//---------------------------------------------------------------------------------------------
//*Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(2,1);
// console.log(numbers);

//---------------------------------------------------------------------------------------------
//* Add the other characters to the flintstone array but not as nested arrays.
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(...["Barney", "Betty"]);
// flintstones.push(...["Bambam", "Pebbles"]);
// console.log(flintstones);


//---------------------------------------------------------------------------------------------

//*Create an array from this object that contains only two elements: Barney's name and Barney's number:

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// let barney = Object.entries(flintstones)[2]
// console.log(barney);

// console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney"))


// let tarasArray = [['Montgomery', 53], ['Mollie', 8], ['Maddie', 6]];

// let newArray = tarasArray;
// ///console.log(newArray);
// console.log(newArray.shift());

// console.log(newArray); //[ [ 'Mollie', 8 ], [ 'Maddie', 6 ] ]

// let array = ['this','that']
// console.log(array.shift())

//---------------------------------------------------------------------------------------------
//*How would you check whether the objects assigned to variables numbers and table below are arrays?

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

//---------------------------------------------------------------------------------------------
//*Back in the stone age (before CSS), we used spaces to align things on the screen. 
//?if we have a 40-character wide table of Flintstone family members, 
//*how can we center the following title above the table with spaces?



// let width = 40;  
// let title = "Flintstone Family Members";
// //let frontPadding = Math.floor((width - title.length)/2);
// let adjustedWidth = title.length + Math.floor((width - title.length)/2);
// let centeredTitle = title.padStart(adjustedWidth, " ");

// console.log(width);
// console.log(title.length)
// //console.log(frontPadding)
// console.log(adjustedWidth)

// console.log(centeredTitle);

//---------------------------------------------------------------------------------------------
//*Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

//iterate through string
//evaluate for lowercase t
//increment counter

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";


// console.log(statement1.split('').filter(char => char ==='t').length);
//---------------------------------------------------------------------------------------------
//* Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];
//numbers = [];
//numbers.length = 0;
// while(numbers.length) {
//   numbers.pop();
// } 
// numbers.splice(0, numbers.length); //let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// console.log(numbers);
//---------------------------------------------------------------------------------------------
//*he following function unnecessarily uses two return statements to return boolean values. 
//*Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }


// function isColorValid2(color) {
//   return color === 'blue' || color === 'green';
// }
// const isColorValid3 = color => ["blue", "green"].includes(color);
// const isColorValid4 = color => color === "blue" || color === "green";