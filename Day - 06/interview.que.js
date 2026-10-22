// 🧠 Interview Questions — Answers

// Scope
// What is scope?
// Scope defines where variables and functions can be accessed in a program.

// Difference between Global Scope and Local Scope.
// Global scope is accessible throughout the program. Local scope is accessible
// only inside the function or block where it is declared.

// What is Block Scope?
// Block scope limits a variable to a pair of curly braces, such as an if block
// or loop. Variables declared with let and const have block scope.

// Difference between var, let, and const regarding scope.
// var is function-scoped, while let and const are block-scoped. let can be
// reassigned, const cannot be reassigned, and all three can be globally scoped
// when declared outside a function.

// What is Lexical Scope?
// Lexical scope means a function can access variables based on where it was
// written in the source code, including variables from its outer scopes.


// Arrays
// What is an array?
// An array is an ordered, zero-indexed collection that can store multiple values.

// Difference between arrays and objects.
// Arrays store ordered values accessed by numeric indexes; objects store keyed
// values accessed by property names.

// Difference between push() and pop().
// push() adds one or more elements to the end of an array. pop() removes and
// returns the last element.

// Difference between shift() and unshift().
// shift() removes and returns the first element. unshift() adds one or more
// elements to the beginning of an array.

// What does includes() do?
// includes() checks whether an array or string contains a value and returns true
// or false.

// What does indexOf() do?
// indexOf() returns the first index of a matching value, or -1 if it is not found.

// Difference between length and index.
// length is the number of elements in an array or characters in a string. An
// index identifies a position and starts at 0.


// Objects
// What is an object?
// An object is a collection of key-value pairs used to represent related data.

// Dot notation vs bracket notation.
// Dot notation uses object.key and works with valid, known property names.
// Bracket notation uses object[expression] and supports dynamic or special keys.

// How do you add a property?
// Assign a value: object.property = value; or object["property"] = value.

// How do you delete a property?
// Use the delete operator, for example: delete object.property.

// Can objects contain arrays?
// Yes. An object property can store an array.

// Can arrays contain objects?
// Yes. Array elements can store objects.

// Difference between primitive and reference types.
// Primitive values are simple, immutable values copied by value, such as string,
// number, boolean, null, undefined, bigint, and symbol. Objects and arrays are
// reference values; variables hold a reference to the same underlying value.

// What is a nested object?
// A nested object is an object stored as a property inside another object.
