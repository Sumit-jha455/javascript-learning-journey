// 🧠 Interview Questions

// What is JavaScript?
// JavaScript is a programming language used to make web pages interactive
// and to build applications that run in browsers, servers, and other environments.

// Why is JavaScript called a scripting language?
// It is called a scripting language because its code is commonly interpreted
// and executed by a host environment, such as a web browser, without first
// being compiled into a standalone executable.

// Difference between var, let, and const.
// var is function-scoped and can be redeclared and reassigned.
// let is block-scoped, can be reassigned, but cannot be redeclared in the same scope.
// const is block-scoped and cannot be reassigned or redeclared after initialization.

// What is hoisting? (Basic idea only for today.)
// Hoisting is JavaScript's behavior of processing declarations before running
// the code in their scope. var declarations are initialized with undefined,
// while let and const remain unavailable until their declaration is reached.

// What is variable declaration?
// Declaration means creating a variable by specifying its name, for example:
// let age;

// What is initialization?
// Initialization means giving a variable its first value, for example:
// let age = 25;

// What is reassignment?
// Reassignment means changing the value of an already initialized variable:
// let age = 25;
// age = 26;

// What is redeclaration?
// Redeclaration means declaring the same variable name again in the same scope.
// var allows this, but let and const do not.

// Why should we avoid using var?
// var is function-scoped, allows accidental redeclaration, and can be used
// before its declaration with the value undefined. let and const provide safer,
// block-scoped behavior.

// What are template literals?
// Template literals are strings written with backticks (`). They support
// multiline text and inserting values or expressions with ${}:
// const name = "Sumit";
// console.log(`Hello, ${name}!`);
