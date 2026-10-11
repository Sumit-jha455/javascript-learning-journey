// 1. Create a variable of type string and try to add a number to it.

let a = "Sumit";
let b = 10;

console.log(a + b); // Output: Sumit10


// 2. use the typeof operator to check the data type of string in last question.

console.log(typeof (a+b)); // Output: string

// 3. create a const object in javascript. Can you change it to hold a number later? Try to change it and see what happens.

const obj = {
    name: "Sumit",
    age: 20,
    City: "Delhi",
    occupation: "Student"
}
age = 21; // This will throw an error because obj is a constant and cannot be reassigned to a number.

console.log(obj);

// 4. try to add a new property to the const object created in last question. Are you able to do it? Try to add a new property and see what happens.

obj.country = "India"; // This is allowed because we are modifying the properties of the object, not reassigning the object itself.
console.log(obj); // Output: { name: 'Sumit', age: 20, City: 'Delhi', occupation: 'Student', country: 'India' }

//5. write a JS program to create a word-meaning dictionary of 5 words 

const dictionary = {
    JavaScript: "A high-level, interpreted programming language.",
    Variable: "A storage location identified by a name.",
    Function: "A block of code designed to perform a particular task.",
    Object: "A collection of properties, where each property is a key-value pair.",
    Array: "An ordered collection of elements, which can be of any type."
};

console.log(dictionary);
console.log(dictionary.JavaScript); // Output: A high-level, interpreted programming language.
console.log(dictionary["Function"]); // Output: A block of code designed to perform a particular task.


