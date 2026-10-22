// 💻 Coding Practice (40 Questions)

// Scope (1–5)

// 1. Global variable example.
var globalVariable = "I am global";
console.log(globalVariable);

// 2. Function scope example.
function functionScopeExample() {
	var functionVariable = "I am inside a function";
	console.log(functionVariable);
}
functionScopeExample();

// 3. Block scope example.
{
	let blockVariable = "I am inside a block";
	const anotherBlockVariable = 10;
	console.log(blockVariable, anotherBlockVariable);
}

// 4. var vs let inside loops.
for (var i = 0; i < 3; i++) {
	// var is function-scoped, so its final value is available outside.
}
console.log("var after loop:", i);

for (let j = 0; j < 3; j++) {
	// let is block-scoped and cannot be accessed outside this loop.
}

// 5. Nested function scope.
function outerFunction() {
	const outerValue = "outer";
	function innerFunction() {
		console.log("Nested scope:", outerValue);
	}
	innerFunction();
}
outerFunction();

// Arrays (6–25)

// 6. Create an array of five numbers.
let numbers = [10, 20, 30, 40, 50];
console.log("Array:", numbers);

// 7. Print the first element.
console.log("First element:", numbers[0]);

// 8. Print the last element.
console.log("Last element:", numbers[numbers.length - 1]);

// 9. Find array length.
console.log("Length:", numbers.length);

// 10. Add an element using push().
numbers.push(60);
console.log("After push:", numbers);

// 11. Remove the last element.
numbers.pop();
console.log("After pop:", numbers);

// 12. Remove the first element.
numbers.shift();
console.log("After shift:", numbers);

// 13. Add an element at the beginning.
numbers.unshift(10);
console.log("After unshift:", numbers);

// 14. Find the index of an element.
console.log("Index of 30:", numbers.indexOf(30));

// 15. Check if an element exists.
console.log("Contains 40:", numbers.includes(40));

// 16. Reverse an array.
console.log("Reversed:", [...numbers].reverse());

// 17. Find the largest number.
console.log("Largest:", Math.max(...numbers));

// 18. Find the smallest number.
console.log("Smallest:", Math.min(...numbers));

// 19. Find the sum of all elements.
const sum = numbers.reduce((total, number) => total + number, 0);
console.log("Sum:", sum);

// 20. Find the average.
console.log("Average:", sum / numbers.length);

// 21. Count even numbers.
console.log("Even count:", numbers.filter((number) => number % 2 === 0).length);

// 22. Count odd numbers.
console.log("Odd count:", numbers.filter((number) => number % 2 !== 0).length);

// 23. Remove duplicate values.
const valuesWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueValues = [...new Set(valuesWithDuplicates)];
console.log("Without duplicates:", uniqueValues);

// 24. Merge two arrays.
const mergedArray = [1, 2, 3].concat([4, 5, 6]);
console.log("Merged array:", mergedArray);

// 25. Sort an array (ascending order).
const unsortedArray = [40, 10, 30, 20, 50];
console.log("Sorted array:", unsortedArray.sort((a, b) => a - b));

// Objects (26–40)

// 26. Create a student object.
const student = { name: "Aarav", age: 20, marks: 85 };

// 27. Print all properties.
console.log("Student properties:", Object.entries(student));

// 28. Add a new property.
student.course = "JavaScript";
console.log(student);

// 29. Update a property.
student.marks = 90;
console.log(student);

// 30. Delete a property.
delete student.course;
console.log(student);

// 31. Create an employee object.
const employee = { name: "Riya", id: 101, department: "IT", salary: 50000 };
console.log("Employee:", employee);

// 32. Create a car object.
const car = { brand: "Toyota", model: "Camry", year: 2024, color: "White" };
console.log("Car:", car);

// 33. Create a mobile object.
const mobile = { brand: "Samsung", model: "Galaxy S24", storage: "256GB", price: 79999 };
console.log("Mobile:", mobile);

// 34. Create a library object.
const library = {
	name: "City Library",
	books: ["JavaScript Basics", "Clean Code", "Web Development"],
};
console.log("Library:", library);

// 35. Create an array of student objects.
const students = [
	{ name: "Aarav", age: 20, marks: 90 },
	{ name: "Riya", age: 22, marks: 80 },
	{ name: "Kabir", age: 21, marks: 85 },
];

// 36. Print each student's name.
students.forEach((currentStudent) => console.log(currentStudent.name));

// 37. Find the oldest student.
const oldestStudent = students.reduce((oldest, currentStudent) =>
	currentStudent.age > oldest.age ? currentStudent : oldest
);
console.log("Oldest student:", oldestStudent);

// 38. Count total students.
console.log("Total students:", students.length);

// 39. Search a student by name.
const searchedStudent = students.find((currentStudent) => currentStudent.name === "Riya");
console.log("Searched student:", searchedStudent);

// 40. Calculate average marks from student objects.
const averageMarks = students.reduce((total, currentStudent) => total + currentStudent.marks, 0) / students.length;
console.log("Average marks:", averageMarks);
