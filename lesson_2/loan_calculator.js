let rlSync = require('readline-sync');

function anotherCalculation() {
  let answer = rlSync.question("\nWould you like to make another calculation?" +
  "\n(Y or y for Yes, otherwise any other key to quit.)  ");
  if (answer === 'Y' ||  answer === 'y') {
    console.log("-----------------------------------------------------\n");
    return true;
  }
  return false;
}

function getMonthlyInterestRate() {
  let interestRate = rlSync.question("Annual interest rate of the loan? (Ex. Enter 5 for 5%) ");
  interestRate /= 100;

  return interestRate / 12;
}

function getMonthlyPayment(loanAmount, loanLengthMonths, monthlyInterestRate) {
  console.log("LOCAL VARIABLE MONTHLY INTEREST RATE ISSS: " + monthlyInterestRate);
  let monthlyPayment = loanAmount * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-loanLengthMonths))));

  return monthlyPayment;
}

console.log("WELCOME TO LOAN CALCULATOR!");
console.log("--------------------------");
let isFinished = false;

while (!isFinished) {
  let loanAmount = rlSync.question("Enter loan amount: \n");
  let loanLengthMonths = rlSync.question("Enter the loan duration (in months): \n");

  // Returns the monthly payment
  // eslint-disable-next-line max-len
  let monthlyPayment = getMonthlyPayment(loanAmount, loanLengthMonths, getMonthlyInterestRate());


  let totalPayment = (monthlyPayment * loanLengthMonths).toFixed(2);

  console.log("Thank you.. Your monthly payment is: $" + monthlyPayment.toFixed(2));
  console.log("Total of " + (loanLengthMonths) + " payments is: $" + totalPayment);

  if (!anotherCalculation()) {
    isFinished = true;
  }
}
console.log("Thanks for using Loan Calculator! ");
