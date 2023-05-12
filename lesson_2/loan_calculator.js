let rlSync = require('readline-sync');

function anotherCalculation() {
  while (true) {
    let answer = rlSync.question("Would you like to make another calculation?" +
    "(type 'yes' or type 'no' please.)  ");
    if (answer === 'Yes' ||  answer === 'yes') {
      console.log("-----------------------------------------------------\n");
      console.clear();
      return true;

    } else if (answer === 'No' || answer === 'no') {
      return false;
    } else {
      console.log("Please answer the question with one of the correct responses.");
    }
  }
}

function validNumber(value) {
  return (!isNaN(value) && value > 0);
}

function getMonthlyInterestRate() {
  let interestRate = 1;
  while (true) {
    interestRate = rlSync.question("Annual interest rate of the loan? (Ex. Enter 5 for 5%) ");
    if (interestRate < 1 || interestRate > 100 || !validNumber(interestRate)) {
      console.log("Please enter a valid interest rate between 0 and 100");
    } else {
      break;
    }
  }
  interestRate /= 100;
  return interestRate / 12;
}

function getMonthlyPayment(loanAmount, loanLengthMonths, monthlyInterestRate) {
  let monthlyPayment = loanAmount * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-loanLengthMonths))));

  return monthlyPayment;
}

console.log("WELCOME TO LOAN CALCULATOR!");
console.log("--------------------------");

do {
  let loanAmount = 0;
  let loanLengthMonths = 0;
  while (true) {
    loanAmount = rlSync.question("Enter loan amount: ");
    if (validNumber(loanAmount)) {
      break;
    }
    console.log("Please enter a valid number for the loan amount..");
  }
  while (true) {
    loanLengthMonths = rlSync.question("Enter the loan duration (in months): ");
    if (validNumber(loanLengthMonths)) {
      break;
    }
    console.log("Please enter a valid number for the loan duration..");
  }

  let monthlyPayment = getMonthlyPayment(loanAmount,
    loanLengthMonths, getMonthlyInterestRate());


  let totalPayment = (monthlyPayment * loanLengthMonths).toFixed(2);

  console.log("\nThank you.. Your monthly payment is: $" + monthlyPayment.toFixed(2));
  console.log("Total of " + (loanLengthMonths) + " payments is: $" + totalPayment + '\n');

  if (!anotherCalculation()) {
    break;
  }

} while (true);

console.log("Thanks for using Loan Calculator! ");
