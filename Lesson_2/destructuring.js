const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors','lizard', 'spock'];
const ['r', 'p', 'sc', 'l', 'sp'] = VALID_CHOICES;

function prompt(message) {
  console.log(`=> ${message}`);
}


prompt(`Choose one: ${VALID_CHOICES.join(', ')}(Use r, p, sc, l, sp, respectively)`);
let choice = readline.question();

console.log([r, p, sc, l, sp].includes(choice));

// while (!VALID_CHOICES.includes(choice)) {
//   prompt("That is not a valid choice");
//   choice = readline.question();
