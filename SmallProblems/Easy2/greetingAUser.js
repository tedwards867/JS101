//Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" 
//then the computer yells back to the user.

//*Understand
//? Ask userwhat their name is.
//? if user's response includes an exclamation mark, ask them why they are yelling.
//? othrewise say Hello, <name>

//*Examples
//?What is your name? Bob
//?Hello Bob.

//?What is your name? Bob!
//?HELLO BOB. WHY ARE WE SCREAMING?

//*Datatypes
//?Strings

//*Algorithim
//? require readline-sync for user input
//? check to see if string ends with an exclamation mark.
//?  If it does, respond in all caps with question
//??  If it doesn't greet.

//*code

const readlineSync = require('readline-sync');

console.log('What is your name?');
let name = readlineSync.question();

if (name.endsWith('!')) {
  console.log(`HELLO ${name.toUpperCase()}  WHY ARE WE SCREAMING, ${name.toUpperCase()}?`);
  } else {
  console.log(`Hello, ${name}.  Nice to meet you!`)
};
