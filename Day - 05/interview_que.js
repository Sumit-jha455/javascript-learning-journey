// 🧠 Interview Questions

// 1. What is a function?
// A function is a reusable block of code designed to perform a specific task.

// 2. Why are functions used?
// Functions help organize code, avoid repetition, improve readability, and support reuse.

// 3. Difference between parameters and arguments.
// Parameters are variables listed in a function definition.
// Arguments are the actual values passed when calling the function.
function greet(name) { // name is a parameter
	return `Hello, ${name}`;
}
greet("Sumit"); // "Sumit" is an argument

// 4. What is the return keyword?
// return sends a value back to the code that called the function and stops its execution.

// 5. What happens if a function does not return anything?
// It implicitly returns undefined.

// 6. Difference between function declaration and function expression.
// A function declaration is defined with a name and is hoisted.
function add(a, b) {
	return a + b;
}

// A function expression stores a function in a variable and is not usable before initialization.
const multiply = function (a, b) {
	return a * b;
};

// 7. What is an arrow function?
// An arrow function is a shorter function syntax. It does not have its own this or arguments.
const square = (number) => number * number;

// 8. Can arrow functions be hoisted like function declarations?
// No. Arrow functions assigned to let or const cannot be accessed before initialization.

// 9. What are default parameters?
// Default parameters provide fallback values when an argument is undefined.
function welcome(name = "Guest") {
	return `Welcome, ${name}`;
}

// 10. What is a callback function?
// A callback is a function passed to another function to be called later.
function processUser(name, callback) {
	callback(name);
}
processUser("Sumit", (name) => console.log(name));

// 11. Can a function return another function? (Basic idea)
// Yes. This is useful for creating specialized or reusable functions.
function createMultiplier(factor) {
	return (number) => number * factor;
}

// 12. What is function scope?
// Variables declared with var inside a function are accessible only within that function.
// let and const are block-scoped, but variables inside a function remain unavailable outside it.
