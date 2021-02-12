//greet user
//ask how much they want to borrow
//ask how many years will the loan be
//ask what is the APR
//calculate the monthly interest rate (APR/loan duration months)
//determine loan months (year/12
//calculate monthly payment -> loanAmount * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-loanDuration))))
//display the montly payment amount with $ and decimals.

//limit loan years to 30
//what are valid inputs for interest rate?
//no-interest loans?
//allow user to determine if duration is months or years?

const MESSAGES = require('./calcMessages.json');
const readline = require('readline-sync');

function prompt(MESSAGES) {
  console.log(`=> ${MESSAGES}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number === '0';
}

prompt(MESSAGES['welcome']);

//add while loop for another calculation
while (true) {

  prompt(MESSAGES['loanAmountPrompt']);
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES['invalidNumberMessage']);
    loanAmount = readline.question();
  }

  prompt(MESSAGES['loanDurationYearsPrompt']);
  let loanDurationYears = readline.question();

  while (invalidNumber(loanDurationYears)) {
    prompt(MESSAGES['invalidNumberMessage']);
    loanDurationYears = readline.question();
  }
  prompt(MESSAGES['APRPrompt']);
  let APR = readline.question();
  let loanDurationMonths = parseInt(loanDurationYears * 12); //what is someone enters 6.5?
  //prompt(`Amount to Borrow: ${loanAmount}, Loan Duration in Years: ${loanDurationYears}, Loan Duration in Months: ${loanDurationMonths}, APR: ${APR} `)

  let monthlyInterestRate = parseFloat(APR) / loanDurationMonths;
  let monthlyPayment = parseFloat(loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))))).toFixed(2);

  prompt(`Your monthly payment for ${loanDurationYears} years will be $${monthlyPayment}`);

  //end another calcuation loop
  prompt(MESSAGES['anotherPrompt']);
  let anotherCalc = readline.question();
  if (anotherCalc[0].toLowerCase()  !== 'y') break;

}