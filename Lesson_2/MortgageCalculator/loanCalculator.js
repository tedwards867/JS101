// loanCalculator.js
const MESSAGES = require('./calcMessages.json');
const readline = require('readline-sync');

function prompt(MESSAGES) {
  console.log(`=> ${MESSAGES}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number <= '0';
}

function invalidIntRate(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number < '0';
}

function paymentCalculationWithInterest(loanAmount,
  monthlyInterestRate, loanDurationMonths) {
  let payment = parseFloat(loanAmount *
    (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths)))));
  return payment;
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
  prompt(MESSAGES['interestRatePrompt']);
  let interestRate = readline.question();
  while (invalidIntRate(interestRate)) {
    prompt(MESSAGES.invalidIntRateMessage);
    interestRate = readline.question();
  }

  let annualPercentageRate = parseFloat(interestRate / 100);
  let loanDurationMonths = Number(loanDurationYears) * 12;

  let monthlyInterestRate = annualPercentageRate / 12;
  let monthlyPayment;
  if (interestRate > 0) {
    monthlyPayment = paymentCalculationWithInterest(loanAmount,
      monthlyInterestRate, loanDurationMonths);
  } else {
    monthlyPayment = parseFloat(loanAmount / loanDurationMonths);
  }
  prompt(`Your monthly payment for ${loanDurationYears} years will be $${monthlyPayment.toFixed(2)}`);

  //end another calcuation loop
  prompt(MESSAGES.anotherPrompt);
  let anotherCalc = readline.question();
  if (anotherCalc.toLowerCase()  !== 'y') {
    break;
  }
  console.clear();
}
