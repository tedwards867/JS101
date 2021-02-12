//greet user
//ask for first number
//ask for second number
//ask for operator
//display result

const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'fr';
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}


function prompt(MESSAGES) {
  console.log(`=> ${MESSAGES}`);
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages('welcome', LANGUAGE));

while (true) {

  prompt(messages('num1Prompt', LANGUAGE));
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt(messages(invalidMessage, LANGUAGE));
    num1 = readline.question();
  }

  prompt(messages('num2Prompt', LANGUAGE));
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt(messages(invalidMessage, LANGUAGE));
    num1 = readline.question();
  }

  prompt(messages('operatorPrompt', LANGUAGE));
  let operator = readline.question();

  while (!['+', '-', '*', '/'].includes(operator)) {
    prompt('Must choose from +,-,*,/');
    operator = readline.question();
  }

  let output;
  switch  (operator) {
    case '+' :
      output = Number(num1) + Number(num2);
      break;
    case '-' :
      output = Number(num1) - Number(num2);
      break;
    case '*' :
      output = Number(num1) * Number(num2);
      break;
    case '/' :
      output = Number(num1) / Number(num2);
      break;
    default: output = ("I can't process that information, please enter valid values");
  }
  prompt(`The answer is ${output}.`);


  prompt(messages('anotherPrompt', LANGUAGE));
  let answer = readline.question();
  if (answer[0].toLowerCase()  !== 'y') break;

}