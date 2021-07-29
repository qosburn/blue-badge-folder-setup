/*
- ARRAY METHODS
*/

//ARRAY methods allow us to manipulate elements in an array.
// they allow us to combine, remove , add, update, and reverse elements.

// Join Method
/* The join method allows us to concatenate all of the elements in an array. It create an then returns a string using a separator
Note: a separator can be anything!
*/

let sailorMoon = ['Sailor Venus', 'Sailor Mars', 'Sailor Moon'];
console.log(sailorMoon.join(' * '));

// Reverse Method

let numbers = [1, 2, 3];
console.log(numbers.reverse());

let sailorMoon2 = ['Sailor Venus', 'Sailor Mars', 'Sailor Moon'];
console.log(sailorMoon2.reverse());

//Split Method

// Splits an element into multiple elements and returns an array. Note it does not change the original array

let str = 'Sailor moon is one of my favorite cartoons';

let strWords = str.split(' ');
console.log(strWords);

let strChar = str.split('');
console.log(strChar[8]);

fullName = 'Taylor Dickens';
partName = fullName.split(' ', 1);
console.log(partName);

// Replace Method
/*
used to search fro a certain string and replace it with another.  */

let wrong = "Who's monitor is this?";
let correct = wrong.replace("Who's", 'Whose');
console.log(correct);

let str2 = 'I have experiance in jaVascript';
let strNew = str2.replace(/javascript/gi, 'JavaScript'); //gi = global case insensitive
console.log(strNew);

//Splice Method
/* 
We used the splice method when we want to elete a certain element and/or replace them with other elements that we create.
*/

let darkSide = [
  'Darth Vader',
  'Darth Plaqueis',
  'Emeror Palpatine',
  'Count Dooku',
  'General Grievoius',
  'Kylo Ren',
  'Darth Maul',
];
let removed = darkSide.splice(2, 4, 'Darth Sidious', 'Darth Tyranus'); // start an then how many place

console.log(darkSide);
console.log(removed);

//Map Method
/**
 used to update all the elements in an array based on a function that yu create. Note: This method does NOT creat a new array.
 */

let wheelOfTime = [
  { firstname: 'Rand', lastname: "al'Thor" },
  { firstname: 'Egwene', lastname: "al'Vere" },
  { firstname: 'Nynaeve', lastname: "al'Meara" },
];

let charsName = wheelOfTime.map(function (name) {
  return [name.firstname, name.lastname].join(' ');
});
console.log(charsName);
console.log(wheelOfTime);

//Index of Method
/**
 * Used to determin where and element is in an array
 */

let alphabet = 'a b c d e f g h i j k l m n o p';
let alphaB = alphabet.split(' ').indexOf('b');

alphaB += 1;
console.log(alphaB);

//FILTER METHOD

/** Used to filter out certain eleme3nts. Returns a value of true or false */

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers2.filter(function (item) {
  if (item % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(even);

//EVERY METHOD
/**
 * Use this method if you want to check if every element in th array passes a condition.
 */

let ages = [34, 27, 18, 43, 12, 66];
let over18 = ages.every(function (element) {
  return element > 18;
});
console.log(over18);
