const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors','lizard', 'spock'];


function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice} and the computer choose ${computerChoice}.`);
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) ||
      (choice = 'lizard' && (computerChoice === 'spock' || computerChoice === 'papar'))) {
    return 'You win!';
  } else if (choice === computerChoice) {
    return "It's a tie!";
  } else {
    return "Computer Wins!";
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}
let answer = 'y';

while (answer === 'y') {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}(Use r, p, sc, l, sp, respectively)`);
  let choice = readline.question();

  switch (choice) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 'sc':
      choice = 'scissors';
      break;
    case 'l':
      choice = 'lizard';
      break;
    case 'sp':
      choice = 'spock';
      break;
    default:
      console.log(`${choice} is not a valid entry.  Please use r, p, sc, l, or sp.)`);
  }

  // while (!VALID_CHOICES.includes(choice)) {
  //   prompt("That is not a valid choice");
  //   choice = readline.question();
  // }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(displayWinner(choice, computerChoice));

  prompt('Do you want to play again? (y/n)');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
    console.clear();
  }
}