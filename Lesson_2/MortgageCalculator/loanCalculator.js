// loanCalculator.js
const MESSAGES = require('./calcMessages.json');
const readline = require('readline-sync');

function prompt(MESSAGES) {
  console.log(`=> ${MESSAGES}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number <= '0';
}

prompt(MESSAGES.welcome);

//add while loop for another calculation
while (true) {

  prompt(MESSAGES.loanAmountPrompt);
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES.invalidNumberMessage);
    loanAmount = readline.question();
  }

  prompt(MESSAGES.loanDurationYearsPrompt);
  let loanDurationYears = readline.question();

  while (invalidNumber(loanDurationYears)) {
    prompt(MESSAGES.invalidNumberMessage);
    loanDurationYears = readline.question();
  }
  prompt(MESSAGES['APRPrompt']);
  let APR = readline.question();
  let loanDurationMonths = parseInt(loanDurationYears * 12);


  let monthlyInterestRate = parseFloat(APR) / loanDurationMonths;
  let monthlyPayment;
  if (APR > 0) {
    monthlyPayment = parseFloat(loanAmount * (monthlyInterestRate /
       (1 - ((1 + monthlyInterestRate) ** (-loanDurationMonths))))).toFixed(2);
  } else {
    monthlyPayment = parseFloat(loanAmount / loanDurationMonths).toFixed;
  }
  prompt(`Your monthly payment for ${loanDurationYears} years will be $${monthlyPayment}`);

  //end another calcuation loop
  prompt(MESSAGES.anotherPrompt);
  let anotherCalc = readline.question();
  if (anotherCalc[0].toLowerCase()  !== 'y') {
    break;
  } else {
    console.clear();
  }

}