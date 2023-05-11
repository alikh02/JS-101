// Question 1
//let numbers = [1, 2, 3];
//numbers[6] = 5;

/**
 * No this code will not produce an error. The array's length will change to 7 and include empty items
 * as elements. While the element at index 6 will have a value of the number `5`, the other newly added elements
 * will be considered empty items. Empty items in JavaScript are counted in the length however they do not have
 * a value. The type `undefined` is returned when attempting to reference an empty item.
 *
 */

 // Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/*
It will return `undefined`. In this case `undefined` represents an absence of a value.
*/

// Question 2
// How can you determine whether a given string ends with an exclamation mark (!)?
//let str1 = "Come over here!"; // true
//let str2 = "What's up, Doc?"; // false

//str1[str1.length-1] === '!';
//str2[str2.length-1] === '!';

// Question 3
// Determine whether the following object of people and their age contains an entry for 'Spot':
//let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
//ages.hasOwnProperty('Spot');

// Question 4
//Using the following string, create a new string that contains all lowercase letters except
//for the first character, which should be capitalized. (See the example output.)
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();

//Question 5
// What will the following code output?
//console.log(false == '0');
//console.log(false === '0');

/*
The first line will output true and the second line will output false.  In the first line, the loose
equality operator is being used which means the JavaScript engine will coerce both values to be of the
same type before comparing the values. In this case the boolean value `false` will be converted to the number `0`. The second value
which is the string `'0'`, will also be converted to the number `0`. Now that two values are the same type
the result of that line will be the boolean value `true`.

The result of the second line will be `false` since the strict equality operator is being used. With the
strict equality operator comparing values of different type will return false.
*/

// Question 6
// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);


// Question 7
// Determine whether the name Dino appears in the strings below -- check each string separately):
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
str1.includes('Dino');
str2.includes('Dino');

// Question 8
// How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones[flintstones.length] = 'Dino';

// Question 9
// How can we add multiple items to our array? ('Dino' and 'Hoppy')
flintstones.push('Dino2', 'happy');


// Question 10
//Return a new version of this sentence that ends just before the word house. Don't worry about
//spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
advice.slice(0, advice.indexOf('house'));
