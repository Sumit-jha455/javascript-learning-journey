
// 💻 Mixed Coding Practice (40 Questions)

// Easy (1–10)

// 1. Swap two variables.
function swap(a, b) {
	return [b, a];
}

// 2. Find the largest of three numbers.
function largestOfThree(a, b, c) {
	return Math.max(a, b, c);
}

// 3. Check even or odd.
function evenOrOdd(number) {
	return number % 2 === 0 ? "Even" : "Odd";
}

// 4. Find factorial.
function factorial(number) {
	if (number < 0) return undefined;
	let result = 1;
	for (let i = 2; i <= number; i++) result *= i;
	return result;
}

// 5. Check palindrome number.
function isPalindromeNumber(number) {
	const text = String(number);
	return text === [...text].reverse().join("");
}

// 6. Reverse a string.
function reverseString(text) {
	return [...text].reverse().join("");
}

// 7. Find sum of array.
function arraySum(numbers) {
	return numbers.reduce((sum, number) => sum + number, 0);
}

// 8. Find maximum element.
function arrayMaximum(numbers) {
	return Math.max(...numbers);
}

// 9. Print multiplication table.
function multiplicationTable(number, limit = 10) {
	return Array.from({ length: limit }, (_, i) => `${number} x ${i + 1} = ${number * (i + 1)}`);
}

// 10. Print first 20 odd numbers.
function firstTwentyOddNumbers() {
	return Array.from({ length: 20 }, (_, i) => i * 2 + 1);
}

// Intermediate (11–25)

// 11. Prime number check.
function isPrime(number) {
	if (number < 2) return false;
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) return false;
	}
	return true;
}

// 12. Fibonacci series.
function fibonacci(count) {
	const series = [];
	let a = 0;
	let b = 1;
	for (let i = 0; i < count; i++) {
		series.push(a);
		[a, b] = [b, a + b];
	}
	return series;
}

// 13. Armstrong number.
function isArmstrong(number) {
	const digits = String(number).split("");
	const power = digits.length;
	return Number(number) === digits.reduce((sum, digit) => sum + Number(digit) ** power, 0);
}

// 14. Grade calculator.
function gradeCalculator(marks) {
	if (marks >= 90) return "A";
	if (marks >= 80) return "B";
	if (marks >= 70) return "C";
	if (marks >= 60) return "D";
	return "F";
}

// 15. ATM simulation.
function atm(balance, action, amount = 0) {
	if (action === "deposit") return balance + amount;
	if (action === "withdraw" && amount <= balance) return balance - amount;
	return balance;
}

// 16. Student result system.
function studentResult(marks) {
	const total = arraySum(marks);
	return { total, average: total / marks.length, grade: gradeCalculator(total / marks.length) };
}

// 17. Count vowels.
function countVowels(text) {
	return (text.match(/[aeiou]/gi) || []).length;
}

// 18. Find duplicate array elements.
function findDuplicates(items) {
	return [...new Set(items.filter((item, index) => items.indexOf(item) !== index))];
}

// 19. Remove duplicates.
function removeDuplicates(items) {
	return [...new Set(items)];
}

// 20. Find second largest number.
function secondLargest(numbers) {
	const unique = [...new Set(numbers)].sort((a, b) => b - a);
	return unique[1];
}

// 21. Count word frequency in a sentence.
function wordFrequency(sentence) {
	return sentence.toLowerCase().match(/\b\w+\b/g)?.reduce((counts, word) => {
		counts[word] = (counts[word] || 0) + 1;
		return counts;
	}, {}) || {};
}

// 22. Search an object by property.
function searchObject(objects, property, value) {
	return objects.find((object) => object[property] === value);
}

// 23. Merge two arrays.
function mergeArrays(first, second) {
	return [...first, ...second];
}

// 24. Sort an array.
function sortArray(numbers) {
	return [...numbers].sort((a, b) => a - b);
}

// 25. Count even and odd numbers.
function countEvenOdd(numbers) {
	return numbers.reduce((counts, number) => {
		counts[number % 2 === 0 ? "even" : "odd"]++;
		return counts;
	}, { even: 0, odd: 0 });
}

// Advanced (26–40)

// 26. Employee salary management.
function employeeSalary(employee, increment = 0) {
	return { ...employee, salary: employee.salary + employee.salary * increment / 100 };
}

// 27. Library management.
function libraryBookAction(books, title, action) {
	return books.map((book) => book.title === title ? { ...book, available: action === "return" } : book);
}

// 28. Password strength checker.
function passwordStrength(password) {
	let score = 0;
	if (password.length >= 8) score++;
	if (/[A-Z]/.test(password)) score++;
	if (/[a-z]/.test(password)) score++;
	if (/\d/.test(password)) score++;
	if (/[^A-Za-z0-9]/.test(password)) score++;
	return score >= 4 ? "Strong" : score >= 2 ? "Medium" : "Weak";
}

// 29. Student management system.
function manageStudent(students, student, action = "add") {
	if (action === "add") return [...students, student];
	return students.filter((item) => item.id !== student.id);
}

// 30. Electricity bill calculator.
function electricityBill(units) {
	if (units <= 100) return units * 1.5;
	if (units <= 200) return 150 + (units - 100) * 2.5;
	if (units <= 500) return 400 + (units - 200) * 4;
	return 1600 + (units - 500) * 6;
}

// 31. GST calculator.
function gstCalculator(amount, rate) {
	return { gst: amount * rate / 100, total: amount * (1 + rate / 100) };
}

// 32. Shopping discount system.
function discountedPrice(price, discount) {
	return price - price * discount / 100;
}

// 33. Currency converter.
function convertCurrency(amount, exchangeRate) {
	return amount * exchangeRate;
}

// 34. BMI calculator.
function bmiCalculator(weightKg, heightMeters) {
	const bmi = weightKg / heightMeters ** 2;
	return { bmi: Number(bmi.toFixed(2)), category: bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese" };
}

// 35. Temperature converter.
function temperatureConverter(value, from, to) {
	const celsius = from === "C" ? value : from === "F" ? (value - 32) * 5 / 9 : value - 273.15;
	return to === "C" ? celsius : to === "F" ? celsius * 9 / 5 + 32 : celsius + 273.15;
}

// 36. Bank interest calculator.
function bankInterest(principal, rate, years) {
	const interest = principal * rate * years / 100;
	return { interest, total: principal + interest };
}

// 37. Number guessing game logic.
function numberGuess(secret, guess) {
	return guess === secret ? "Correct" : guess < secret ? "Too low" : "Too high";
}

// 38. Simple calculator.
function calculator(a, operator, b) {
	if (operator === "+") return a + b;
	if (operator === "-") return a - b;
	if (operator === "*") return a * b;
	if (operator === "/") return b === 0 ? undefined : a / b;
	return undefined;
}

// 39. Movie ticket booking logic.
function bookMovieTickets(availableSeats, requestedSeats) {
	return requestedSeats <= availableSeats
		? { success: true, remainingSeats: availableSeats - requestedSeats }
		: { success: false, remainingSeats: availableSeats };
}

// 40. Voting eligibility system.
function votingEligibility(age) {
	return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}
