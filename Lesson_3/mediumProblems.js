//---------------------------------------------------------------------------------------------
//*write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. 
//*The output should start out like this:
//The Flintstones Rock!
// The Flintstones Rock!
//  The Flintstones Rock!

// declare variable
//in loop add 1 space in front of string for 10 loops

// let phrase = 'The Flintstones Rock!';

// for (let i = 0; i < 10; i += 1) {
//   phrase = ' '+ phrase;
//   console.log(phrase);
// }

// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }

//---------------------------------------------------------------------------------------------
//* Return a new string that swaps the case of all of the letters.
//determine case of letter.
//if case is upper, set to lower
//if case is lower set to upper


// let munstersDescription = "The Munsters are creepy and spooky.";
// let newCase = munstersDescription.split('');
// for (let i = 0; i < newCase.length; i += 1) {
//   if (newCase[i] === newCase[i].toUpperCase()) {
//     newCase[i] = newCase[i].toLowerCase();
//   }
//      else {
//       newCase[i] = newCase[i].toUpperCase();
//     }
//   }
// console.log(newCase.join(''));
//---------------------------------------------------------------------------------------------
//* update the method below to handle the condition where 0 is "number" without using a do/while loop

// function factors(number) {
//   let divisor = number;
//   let factors = [];

//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(divisor);
//     }
//     divisor -= 1;
//   } 
//   return factors;
// }
// console.log(factors(42));

//---------------------------------------------------------------------------------------------
//*

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps("rock", "scissors"));
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));