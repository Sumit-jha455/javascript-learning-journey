
// 🧠 Interview Questions (25)

// Fundamentals

// What is JavaScript?
// JavaScript is a high-level programming language used to create dynamic and interactive web experiences.

// Why is JavaScript used?
// It adds interactivity, manipulates web pages, handles events, communicates with servers, and can run on servers via Node.js.

// Difference between Java and JavaScript.
// Java is a class-based, compiled language; JavaScript is a dynamically typed scripting language. They are different languages.

// Difference between var, let, and const.
// var is function-scoped and can be redeclared; let is block-scoped and can be reassigned; const is block-scoped and cannot be reassigned.

// What is hoisting?
// Hoisting is JavaScript's behavior of processing declarations before executing code. var is initialized as undefined; let and const remain uninitialized.

// What is the Temporal Dead Zone (TDZ)?
// The TDZ is the time between entering a scope and initializing a let or const variable, during which accessing it throws a ReferenceError.

// Data Types

// Primitive vs Non-Primitive.
// Primitives are immutable values such as string, number, bigint, boolean, undefined, symbol, and null. Objects, including arrays and functions, are non-primitives.

// Difference between null and undefined.
// undefined usually means a value has not been assigned; null is an intentional empty value.

// Difference between == and ===.
// == compares after type coercion; === compares both value and type without coercion.

// What is NaN?
// NaN means "Not-a-Number" and represents an invalid numeric result. Its type is number.

// Functions

// Function Declaration vs Expression.
// A declaration is hoisted and defined with function syntax; an expression assigns a function to a variable and is usable only after initialization.

// Arrow Functions.
// Arrow functions provide shorter syntax and do not have their own this, arguments, or prototype.

// Parameters vs Arguments.
// Parameters are named variables in a function definition; arguments are the actual values passed when calling it.

// Callback Functions.
// A callback is a function passed to another function to be called later or when an operation completes.

// Return statement.
// return ends a function and optionally sends a value back to its caller.

// Arrays

// Array vs Object.
// An array is an ordered collection accessed mainly by numeric indexes; an object stores named key-value pairs.

// push() vs pop().
// push() adds one or more items to the end of an array; pop() removes and returns the last item.

// shift() vs unshift().
// shift() removes and returns the first item; unshift() adds one or more items to the beginning.

// includes() vs indexOf().
// includes() returns true or false; indexOf() returns the matching index or -1.

// Objects

// Dot notation vs Bracket notation.
// Dot notation uses a fixed valid identifier, such as object.name; bracket notation supports dynamic keys and keys with special characters, such as object[key].

// How to add and delete properties?
// Add or update with object.key = value or object[key] = value. Delete with delete object.key.

// Loops

// Difference between for and while.
// for is convenient when initialization, condition, and update are known; while repeats as long as its condition is true.

// Difference between break and continue.
// break exits the loop completely; continue skips the current iteration and proceeds to the next one.

// Scope

// Global Scope vs Local Scope.
// Global variables are accessible throughout the program; local variables are accessible only within their function or block.

// Block Scope.
// Block scope limits let and const variables to the nearest pair of braces, such as an if statement or loop.

