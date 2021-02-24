const readline = require('readline-sync');
const MAX_WINS = 5; //update logic for max wins/rounds
const VALID_CHOICES = {
  rock:     'r',
  paper:    'p',
  scissors: 'sc',
  lizard:   'l',
  spock:    'sp',
};

const VALID_WORDS = Object.keys(VALID_CHOICES);
const VALID_ABBREVIATIONS = Object.values(VALID_CHOICES);

let scores = {
  humanScore: 3,
  computerScore: 0,
  ties: 0,
};

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',      'spock'],
  scissors: ['paper',     'lizard'],
  lizard:   ['paper',     'spock'],
  spock:    ['rock',      'scissors'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}
//unit tested
function playerWon(humanChoice, computerChoice) {
  return WINNING_COMBOS[humanChoice].includes(computerChoice);
}
//unit tested
function displayWinner(humanChoice, computerChoice) {
  if (playerWon(humanChoice, computerChoice)) {
    return "You win this round!";
  } else if ((playerWon(computerChoice, humanChoice))) {
    return  "Computer Wins this round!";
  } else {
    return "This round is a tie!";
  }
}

//unit tested
function keepScore(humanChoice, computerChoice) {
  if (playerWon(humanChoice, computerChoice)) {
    scores.humanScore += 1;
  } else if (humanChoice === computerChoice) {
    scores.ties += 1;
  } else {
    scores.computerScore += 1;
  }
}


//unit tested
function displayGameStatus(scores, MAX_WINS) {
  prompt(`Your score is ${scores.humanScore}.  The computer's score is ${scores.computerScore}.`);
  if (scores.humanScore === MAX_WINS) {
    prompt('You are the grand master!');
  } else if (scores.computerScore === MAX_WINS) {
    prompt(`The computer won.  Oh well.`);
  }
}


function randomSelection() {
  let randomIndex = Math.floor(
    Math.random() * Object.keys(VALID_CHOICES).length);
  return Object.keys(VALID_CHOICES)[randomIndex];
}

prompt(`Let's play "Rock, Paper, Scissors, Lizard, Spock" Best of ${MAX_WINS}!`);

let answer = 'y';

//game loop
while (answer === 'y') {
  prompt(`Choose: ${VALID_WORDS.join(', ')} or the corresponding abbreviation ${VALID_ABBREVIATIONS.join(', ')}`);
  let humanChoice = readline.question().toLowerCase();


  while (!(VALID_WORDS.includes(humanChoice)) 
  || (VALID_ABBREVIATIONS.includes(humanChoice))) {
    prompt("That is not a valid choice");
    humanChoice = readline.question().toLowerCase();
  }


  let computerChoice = randomSelection();

  prompt(`You chose ${humanChoice}, and the Computer chose ${computerChoice}.`);

  displayWinner(humanChoice, computerChoice);
  keepScore(humanChoice, computerChoice);
  displayGameStatus(scores, MAX_WINS);

  prompt('Do you want to play again? (y/n)');
  answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
    console.clear();
  }
}