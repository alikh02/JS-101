
const LANGUAGE = 'en';
const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function anotherCalc() {
  let answer;
  prompt('Would you like to make another calculation? Type y for yes and n for no');
  answer = readline.question();

  while (answer !== 'n' && answer !== 'y' ) {
    prompt("I'm sorry that is not a valid response.. Please type 'n' or 'y'");
    answer = readline.question();
  }
  if (answer === 'y') {
    return true;
  }
  return false;
}
while (true) {
  prompt(messages('welcome', LANGUAGE));

  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);
  // returns false and exits game loop if user doesn't want to make another Calc
  if (!anotherCalc()) {
    break;
  }
}
