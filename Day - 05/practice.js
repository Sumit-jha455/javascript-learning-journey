
// Basic (1–10)

// 1. Print your name using a function.
function printName(name) {
	console.log(name);
}
printName("Sumit Kumar Jha");

// 2. Print your age.
const age = 25;
console.log("Age:", age);

// 3–6. Add, subtract, multiply, and divide two numbers.
const a = 20;
const b = 5;
console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);

// 7–8. Find the square and cube of a number.
const number = 4;
console.log("Square:", number ** 2);
console.log("Cube:", number ** 3);

// 9–10. Check if a number is even or odd.
function checkEvenOrOdd(value) {
	return value % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOrOdd(7));

// Intermediate (11–25)

// 11. Find the largest of two numbers.
console.log("Largest:", Math.max(12, 25));

// 12. Find the smallest of three numbers.
console.log("Smallest:", Math.min(12, 8, 25));

// 13. Calculate factorial using a function.
function factorial(n) {
	if (n < 0) return undefined;
	let result = 1;
	for (let i = 2; i <= n; i++) result *= i;
	return result;
}
console.log("Factorial:", factorial(5));

// 14. Check prime number.
function isPrime(n) {
	if (n < 2) return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}
console.log("Prime:", isPrime(17));

// 15. Generate Fibonacci series.
function fibonacci(count) {
	const series = [];
	let first = 0;
	let second = 1;
	for (let i = 0; i < count; i++) {
		series.push(first);
		[first, second] = [second, first + second];
	}
	return series;
}
console.log("Fibonacci:", fibonacci(8));

// 16. Reverse a string.
function reverseString(text) {
	return text.split("").reverse().join("");
}
console.log("Reversed:", reverseString("JavaScript"));

// 17. Count vowels in a string.
function countVowels(text) {
	return (text.match(/[aeiou]/gi) || []).length;
}
console.log("Vowels:", countVowels("Hello World"));

// 18. Count words in a sentence.
function countWords(sentence) {
	return sentence.trim() ? sentence.trim().split(/\s+/).length : 0;
}
console.log("Words:", countWords("JavaScript is easy to learn"));

const values = [10, 20, 30, 40];
// 19–21. Average, maximum, and minimum of an array.
console.log("Average:", values.reduce((sum, value) => sum + value, 0) / values.length);
console.log("Maximum:", Math.max(...values));
console.log("Minimum:", Math.min(...values));

// 22. Calculate BMI.
function calculateBMI(weightKg, heightMeters) {
	return (weightKg / heightMeters ** 2).toFixed(2);
}
console.log("BMI:", calculateBMI(70, 1.75));

// 23. Convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}
console.log("Fahrenheit:", celsiusToFahrenheit(25));

// 24. Convert INR to USD.
function inrToUsd(inr, exchangeRate = 83) {
	return (inr / exchangeRate).toFixed(2);
}
console.log("USD:", inrToUsd(830));

// 25. Calculate Simple Interest.
function simpleInterest(principal, rate, time) {
	return (principal * rate * time) / 100;
}
console.log("Simple interest:", simpleInterest(10000, 5, 2));

// Advanced (26–35)

// 26. Check palindrome.
function isPalindrome(text) {
	const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");
	return normalized === reverseString(normalized);
}
console.log("Palindrome:", isPalindrome("Madam"));

// 27. Generate a random password.
function generatePassword(length = 10) {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
	return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
}
console.log("Random password:", generatePassword());

// 28. Validate email format (basic).
function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log("Valid email:", isValidEmail("user@example.com"));

// 29. Calculate electricity bill (slab-based).
function electricityBill(units) {
	if (units <= 100) return units * 1.5;
	if (units <= 200) return 100 * 1.5 + (units - 100) * 2.5;
	return 100 * 1.5 + 100 * 2.5 + (units - 200) * 4;
}
console.log("Electricity bill:", electricityBill(250));

// 30. Calculate GST.
function calculateGST(amount, gstRate) {
	return amount * (gstRate / 100);
}
console.log("GST:", calculateGST(1000, 18));

// 31. Find the second largest number in an array.
function secondLargest(array) {
	const uniqueValues = [...new Set(array)].sort((x, y) => y - x);
	return uniqueValues[1];
}
console.log("Second largest:", secondLargest([10, 30, 20, 30, 5]));

// 32. Remove duplicate values from an array.
function removeDuplicates(array) {
	return [...new Set(array)];
}
console.log("Without duplicates:", removeDuplicates([1, 2, 2, 3, 1]));

// 33. Count occurrences of an element in an array.
function countOccurrences(array, element) {
	return array.filter((value) => value === element).length;
}
console.log("Occurrences:", countOccurrences([1, 2, 2, 3, 2], 2));

// 34. Create a callback function example.
function calculateWithCallback(x, y, callback) {
	return callback(x, y);
}
console.log("Callback result:", calculateWithCallback(4, 5, (x, y) => x + y));

// 35. Three normal functions converted into arrow functions.
const add = (x, y) => x + y;
const square = (x) => x ** 2;
const greet = (person) => `Hello, ${person}!`;
console.log(add(2, 3), square(5), greet("Sumit"));
