const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors','lizard', 'spock'];



function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice} and the computer choose ${computerChoice}.`);
  if ((choice === 'rock' &&
        (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' &&
        (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' &&
        (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'spock' &&
          (computerChoice === 'rock' || computerChoice === 'scissors')) ||
      (choice = 'lizard' &&
          (computerChoice === 'spock' || computerChoice === 'papar'))) {
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
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That is not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(displayWinner(choice, computerChoice));

  prompt('Do you want to play again? (y/n)');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
}