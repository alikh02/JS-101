let rlSync = require('readline-sync');

console.log("WELCOME TO LOAN CALCULATOR!");
let loanAmount = rlSync.question("Enter loan amount: \n");
console.log(`Nice! okay so your loan amount is ${loanAmount}`);
let loanLengthYears = rlSync.question("Enter the loan duration (in years): \n");

let monthlyInterestRate = 0.06;

let monthlyPayment = loanAmount * (monthlyInterestRate /
 (1 - Math.pow((1 + monthlyInterestRate), (-loanLengthYears))) / 12);

console.log("Thank you.. Your monthly payment is: " + monthlyPayment);
console.log("Total of " + (loanLengthYears * 12) + " payments is: " + (monthlyPayment * loanLengthYears * 12));
