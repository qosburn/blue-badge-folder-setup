/* 
SPREAD OPERATOR
-- The spread operator pulls out all elements in an array and gives the bac to you as a stand alone list of elements.
--It takes a iterable object and/or object and edpands it into individual elements. the spread operator is typically used to make copies of and array

*/

// let students = [' jake', 'stepahnie falls'];
// let copiedStudents = [...students];
// let borrowedtudents = [students];
// console.log(students, copiedStudents);

// students.push('Leslie Phillips');

// console.log(students, copiedStudents);

const persons = [
  { name: 'Taylor', age: 300 },
  { name: 'Ryan', age: 25 },
];

const copiedPersons = [...persons];

persons.push({ name: 'Quinn', age: 25 });
console.log(persons, copiedPersons);
