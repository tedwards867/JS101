const readline = require('readline-sync');
const MAX_WINS = 5;
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
  humanScore: 0,
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

function playerWon(humanChoice, computerChoice) {
  return WINNING_COMBOS[humanChoice].includes(computerChoice);
}


function displayWinner(humanChoice, computerChoice) {
  if (playerWon(humanChoice, computerChoice)) {
    prompt("You win this round!");
  } else if ((playerWon(computerChoice, humanChoice))) {
    prompt("Computer Wins this round!");
  } else {
    prompt("This round is a tie!");
  }
}


function keepScore(humanChoice, computerChoice) {
  if (playerWon(humanChoice, computerChoice)) {
    scores.humanScore += 1;
  } else if (humanChoice === computerChoice) {
    scores.ties += 1;
  } else {
    scores.computerScore += 1;
  }
}

function resetScores(scores) {
  scores.humanScore = 0;
  scores.computerScore = 0;
  scores.ties = 0;
}

function gameOver(scores, MAX_WINS) {
  if (scores.humanScore === MAX_WINS ||
    scores.computerScore === MAX_WINS) {
    playAgain();
  }
}

function displayGameStatus(scores, MAX_WINS) {
  prompt(`GAME STATUS: Your score is ${scores.humanScore}.  The computer's score is ${scores.computerScore}.\n`);
  if (scores.humanScore === MAX_WINS) {
    prompt('----------You are the grand master!----------\n');
  } else if (scores.computerScore === MAX_WINS) {
    prompt(`---------The computer won.  Oh well.---------\n`);
  }
}

function playAgain() {
  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'y') {
    resetScores(scores);
    console.clear();
  }
}

function randomSelection() {
  let randomIndex = Math.floor(
    Math.random() * Object.keys(VALID_CHOICES).length);
  return Object.keys(VALID_CHOICES)[randomIndex];
}

function convertHumanChoice(humanChoice) {
  if (Object.values(VALID_CHOICES).includes(humanChoice)) {
    humanChoice =
    Object.keys(VALID_CHOICES).find(key => VALID_CHOICES[key] === humanChoice);
  } else if (!Object.values(VALID_CHOICES).includes(humanChoice)) {
    humanChoice = 'Error';
  }
  return humanChoice;
}

prompt(`Let's play "Rock, Paper, Scissors, Lizard, Spock" Best of ${MAX_WINS}!`);


//game loop
while (scores.humanScore < MAX_WINS && scores.computerScore < MAX_WINS) {


  prompt(`Choose: ${VALID_WORDS.join(', ')} or the corresponding abbreviation ${VALID_ABBREVIATIONS.join(', ')}\n`);
  let humanChoice = readline.question().toLowerCase();

  if (humanChoice === !Object.keys(VALID_CHOICES).includes(humanChoice)) {
    convertHumanChoice(humanChoice);
  }

  while (humanChoice === 'Error') {
    prompt("That is not a valid choice");
    humanChoice = readline.question().toLowerCase();
  }

  let computerChoice = randomSelection();

  prompt(`You chose ${humanChoice.toUpperCase()}, and the Computer chose ${computerChoice.toUpperCase()}.`);

  displayWinner(humanChoice, computerChoice);
  keepScore(humanChoice, computerChoice);
  displayGameStatus(scores, MAX_WINS);
  gameOver(scores, MAX_WINS);
}