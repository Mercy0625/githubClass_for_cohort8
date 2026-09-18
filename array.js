let students = ['John', 'Jane', 'Mary', 'Peter', 'Paul'];
console.log(students[2]);
console.log(students.length);
students[3] = 'David';
console.log(students);
students.push('Milka');
console.log(students);
students.unshift('Peter');
console.log(students);
students.pop();
console.log(students);
students.shift();
console.log(students);
console.log(students.indexOf('Pauline'));
console.log(students.includes('Mary'));

students.reverse();
console.log('this is reversed:', students);
students.sort();
console.log('this is sorted:', students);

console.log('this is sliced:', students.slice(-3,4));
console.log('this is spliced:', students.splice(2,3,'Milka'));
console.log('this is array:', students);

const numbers = [1,2,3,4,5];
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);

const marketList = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
const addedPrefix = marketList.map((item) => 'I will buy: ' + item);
console.log(addedPrefix);

const evenNumbers = numbers.filter((num) => num % 2 ===0);
console.log(evenNumbers);

const complexion = ['dark', 'fair', 'medium', 'light', 'dark', 'fair'];
const myType = complexion.filter((color) => color === 'dark');
console.log(myType);

const findFirstDark = complexion.find((color) => color === 'dark');
console.log(findFirstDark);

const findIndexOfDark = complexion.findIndex((color) => color === 'dark');
console.log(findIndexOfDark);

const nums = [11,22,33,44];
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

const multiply = nums.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(multiply);