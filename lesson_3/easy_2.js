// Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newStr = advice.replace('important', 'urgent');


// Question 2
//let numbers = [1, 2, 3, 4, 5];
//let newNumber = numbers.slice().reverse();

//let newSort =  [...numbers].sort((num1, num2) => num2 - num1);

// Question 3
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
numbers.includes(number1);
numbers.includes(number2);


// Question 4
let famousWords = "seven years ago...";
// first way
let otherWords = "For score and ";

// other way
let fullQuote = famousWords.padStart(famousWords.length + otherWords.length, otherWords);


// Question 5
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);

// Question 6
/*
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// Arr looks like => ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// return same array elements but leave the array un-nested

let flatArr = flintstones.flat();
*/

// Question 7
/*
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let flintArr = Object.entries(flintstones);
let barneyArr = [];
flintArr.forEach(subArr => {
  if (subArr[0] === 'Barney') {
    barneyArr = subArr;
  }
});
console.log(barneyArr);
*/

// Question 8
/*
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
Array.isArray(numbers); // => true
Array.isArray(table);   // => false
*/

// Question 9
/*
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
let answer = title.padStart(padding + title.length);
console.log(title+title);
*/


// Question 10
/*
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);
*/
