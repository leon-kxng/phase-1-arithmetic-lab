
// Write your code here

const num1 = 31;
const num2 = 2;

const multiply = num1 * num2;

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const random = generateRandomNumber();

const mod = 17 % 13;

const numberSet = [5, 10, 20, 15, 8];
const max = Math.max(...numberSet);

console.log('Multiply:', multiply);
console.log('Random:', random);
console.log('Modulus:', mod);
console.log('Max:', max);



