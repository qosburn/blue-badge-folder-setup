/* 
SPREAD OPERATOR
-- The spread operator pulls out all elements in an array and gives the bac to you as a stand alone list of elements.
--It takes a iterable object and/or object and edpands it into individual elements. the spread operator is typically used to make copies of and array

*/

let students = [' jake', 'stepahnie falls'];
let copiedStudents = [...students];
let borrowedtudents = [students];
console.log(students, copiedStudents);

students.push('Leslie Phillips');

console.log(students, copiedStudents);
//MATH
console.log(Math.min(1, 5, -3));
const prices = [10.99, 5.99, 3.99, 6.59]; // when this is consoled it is an array
console.log(Math.min(prices)); // this returns NaN

//CONCATENATE ARRAYS
let sent1 = [1, 2, 3, 4];
let sent2 = [5, 6, 7, 8];
let concat = [...sent1, ...sent2];
console.log(concat); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//PASS ARGUMENTS
let sentence = ['Oh hi Mark', false, 2];

function sent(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

sent(...sentence);

//COPY AN OBJECT
let obj = { a: 1, b: 2, c: 3 };
let copyObj = { ...obj };
console.log(obj, copyObj);

//NOT THIS
let copyObj2 = { obj };
console.log(obj, copyObj2);

//MERGE OBJECTS
let obj1a = { a: 1, b: 2, c: 3, d: 4 };
let obj1b = { e: 5, f: 6, g: 7, h: 8 };
let merge = { ...obj1a, ...obj1b };
console.log(merge);

//NOTE -- their are two "a" keys. the last one called will replace the former in this case
let obj2a = { a: 'Hello', b: 'Mark', c: '!' };
let obj2b = { a: 'Goodbye' };
let obj2c = { ...obj2a, ...obj2b };
console.log(obj2c);

//ERROR -- can not place object in to an array
let obj3a = { a: 1, b: 2, c: 3 };
let copyObj3a = [...obj3a];
console.log(copyObj3a);

const persons = [
  { name: 'Taylor', age: 300 },
  { name: 'Ryan', age: 25 },
];

const copiedPersons = [...persons];

persons.push({ name: 'Quinn', age: 25 });
console.log(persons, copiedPersons);
