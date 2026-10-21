// 💻 Coding Practice (30 Questions)
// Conditional statements without functions.

// Easy (1–10)

// 1. Check Even or Odd.
{
	const number = 7;
	console.log(number % 2 === 0 ? "Even" : "Odd");
}

// 2. Positive, Negative, or Zero.
{
	const number = -4;
	if (number > 0) console.log("Positive");
	else if (number < 0) console.log("Negative");
	else console.log("Zero");
}

// 3. Eligible to Vote.
{
	const age = 20;
	console.log(age >= 18 ? "Eligible to vote" : "Not eligible to vote");
}

// 4. Pass or Fail.
{
	const marks = 65;
	console.log(marks >= 40 ? "Pass" : "Fail");
}

// 5. Largest of Two Numbers.
{
	const a = 12;
	const b = 8;
	console.log(a > b ? a : b);
}

// 6. Smallest of Two Numbers.
{
	const a = 12;
	const b = 8;
	console.log(a < b ? a : b);
}

// 7. Divisible by 5.
{
	const number = 25;
	console.log(number % 5 === 0 ? "Divisible by 5" : "Not divisible by 5");
}

// 8. Divisible by 3 and 5.
{
	const number = 30;
	console.log(number % 3 === 0 && number % 5 === 0
		? "Divisible by both 3 and 5"
		: "Not divisible by both 3 and 5");
}

// 9. Check Leap Year.
{
	const year = 2024;
	const leapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
	console.log(leapYear ? "Leap year" : "Not a leap year");
}

// 10. Check Vowel or Consonant.
{
	const letter = "e";
	console.log("aeiou".includes(letter.toLowerCase()) ? "Vowel" : "Consonant");
}

// Medium (11–20)

// 11. Largest of Three Numbers.
{
	const a = 10, b = 25, c = 15;
	let largest = a;
	if (b > largest) largest = b;
	if (c > largest) largest = c;
	console.log(largest);
}

// 12. Grade Calculator.
{
	const marks = 86;
	if (marks >= 90) console.log("A");
	else if (marks >= 80) console.log("B");
	else if (marks >= 70) console.log("C");
	else if (marks >= 60) console.log("D");
	else console.log("F");
}

// 13. BMI Category.
{
	const weightKg = 70, heightMeters = 1.75;
	const bmi = weightKg / (heightMeters * heightMeters);
	let category;
	if (bmi < 18.5) category = "Underweight";
	else if (bmi < 25) category = "Normal weight";
	else if (bmi < 30) category = "Overweight";
	else category = "Obese";
	console.log(`${category} (BMI: ${bmi.toFixed(2)})`);
}

// 14. Electricity Bill Calculator.
{
	const units = 250;
	let bill;
	if (units <= 100) bill = units * 5;
	else if (units <= 200) bill = 100 * 5 + (units - 100) * 7;
	else bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
	console.log(bill);
}

// 15. Mobile Recharge Discount.
{
	const amount = 600;
	let discount = 0;
	if (amount >= 500) discount = 0.2;
	else if (amount >= 200) discount = 0.1;
	console.log(amount - amount * discount);
}

// 16. Shopping Discount.
{
	const amount = 3000;
	let discount = 0.05;
	if (amount >= 5000) discount = 0.2;
	else if (amount >= 2500) discount = 0.1;
	console.log(amount - amount * discount);
}

// 17. Movie Ticket Price.
{
	const age = 65, isWeekend = true;
	let price = age < 12 ? 100 : age >= 60 ? 120 : 200;
	if (isWeekend) price += 50;
	console.log(price);
}

// 18. Bank Interest Calculator.
{
	const principal = 10000, rate = 5, time = 2;
	console.log((principal * rate * time) / 100);
}

// 19. Income Tax Category.
{
	const income = 750000;
	if (income <= 250000) console.log("No tax");
	else if (income <= 500000) console.log("5% tax slab");
	else if (income <= 1000000) console.log("20% tax slab");
	else console.log("30% tax slab");
}

// 20. Password Validation.
{
	const password = "javascript";
	console.log(password.length >= 8 ? "Valid password" : "Password must be at least 8 characters");
}

// Advanced (21–30)

// 21. ATM Withdrawal Simulator.
{
	const balance = 10000, amount = 2000, pin = 1234, enteredPin = 1234;
	if (pin !== enteredPin) console.log("Invalid PIN");
	else if (amount <= 0 || amount % 100 !== 0) console.log("Enter a valid amount");
	else if (amount > balance) console.log("Insufficient balance");
	else console.log(`Withdrawal successful. Remaining balance: ${balance - amount}`);
}

// 22. Login Authentication.
{
	const username = "admin", password = "1234";
	console.log(username === "admin" && password === "1234" ? "Login successful" : "Invalid username or password");
}

// 23. Scholarship Eligibility.
{
	const marks = 90, familyIncome = 250000;
	console.log(marks >= 85 && familyIncome <= 300000 ? "Eligible for scholarship" : "Not eligible for scholarship");
}

// 24. Age Category.
{
	const age = 17;
	if (age < 13) console.log("Child");
	else if (age < 20) console.log("Teen");
	else if (age < 60) console.log("Adult");
	else console.log("Senior");
}

// 25. Student Attendance Checker.
{
	const attendedDays = 80, totalDays = 100;
	const percentage = (attendedDays / totalDays) * 100;
	console.log(percentage >= 75 ? `Allowed (${percentage.toFixed(2)}%)` : `Not allowed (${percentage.toFixed(2)}%)`);
}

// 26. Simple Calculator using switch.
{
	const a = 20, operator = "+", b = 5;
	switch (operator) {
		case "+": console.log(a + b); break;
		case "-": console.log(a - b); break;
		case "*": console.log(a * b); break;
		case "/": console.log(b !== 0 ? a / b : "Cannot divide by zero"); break;
		default: console.log("Invalid operator");
	}
}

// 27. Day Name using switch.
{
	const dayNumber = 3;
	switch (dayNumber) {
		case 1: console.log("Monday"); break;
		case 2: console.log("Tuesday"); break;
		case 3: console.log("Wednesday"); break;
		case 4: console.log("Thursday"); break;
		case 5: console.log("Friday"); break;
		case 6: console.log("Saturday"); break;
		case 7: console.log("Sunday"); break;
		default: console.log("Invalid day");
	}
}

// 28. Month Name using switch.
{
	const monthNumber = 8;
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	console.log(months[monthNumber - 1] || "Invalid month");
}

// 29. Weather Suggestion App.
{
	const weather = "rainy";
	switch (weather.toLowerCase()) {
		case "sunny": console.log("Wear light clothes and use sunscreen."); break;
		case "rainy": console.log("Carry an umbrella or raincoat."); break;
		case "cold": console.log("Wear warm clothes."); break;
		default: console.log("Check the weather forecast.");
	}
}

// 30. Number Guessing Hint.
{
	const secretNumber = 50, guess = 45;
	if (guess === secretNumber) console.log("Correct guess!");
	else if (guess > secretNumber) console.log("Too high");
	else console.log("Too low");
}
