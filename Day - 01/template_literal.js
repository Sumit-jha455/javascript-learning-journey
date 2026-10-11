// 📘 What are Template Literals?
// Introduced in ES6 (ECMAScript 2015).

// They are strings enclosed by backticks (`) instead of quotes (' or ").

// Allow multi‑line strings and string interpolation (inserting variables directly).

// ✨ Features of Template Literals
// String Interpolation → Insert variables using ${variable}

// Multi‑line Strings → Write strings across multiple lines without \n

// Embedded Expressions → Perform calculations inside ${}

// Readable & Cleaner Syntax

// 🖥️ Examples
// 1. String Interpolation
// javascript
// let name = "Sumit";
// let age = 20;

// console.log(`My name is ${name} and I am ${age} years old.`);
// 👉 Output:
// My name is Sumit and I am 20 years old.

// 2. Multi‑line Strings
// javascript
// let poem = `Roses are red,
// Violets are blue,
// JavaScript is fun,
// And so are you!`;

// console.log(poem);
// 👉 Output preserves line breaks.

// 3. Expressions inside Template Literals
// javascript
// let a = 10;
// let b = 5;

// console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// 👉 Output:
// The sum of 10 and 5 is 15.

// 4. Function Calls inside Template Literals
// javascript
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(`${greet("Sumit")} Welcome to JavaScript.`);
// 👉 Output:
// Hello, Sumit! Welcome to JavaScript.