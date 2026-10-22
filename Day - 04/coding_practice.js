// Basic (1-10)

// 1. Print numbers 1-100.
for (let i = 1; i <= 100; i++) {
	console.log(i);
}

// 2. Print numbers 100-1.
for (let i = 100; i >= 1; i--) {
	console.log(i);
}

// 3. Print even numbers up to n.
let n = 20;
for (let i = 2; i <= n; i += 2) {
	console.log(i);
}

// 4. Print odd numbers up to n.
n = 20;
for (let i = 1; i <= n; i += 2) {
	console.log(i);
}

// 5. Sum of first n numbers.
n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
	sum += i;
}
console.log(sum);

// 6. Sum of even numbers up to n.
n = 10;
sum = 0;
for (let i = 2; i <= n; i += 2) {
	sum += i;
}
console.log(sum);

// 7. Sum of odd numbers up to n.
n = 10;
sum = 0;
for (let i = 1; i <= n; i += 2) {
	sum += i;
}
console.log(sum);

// 8. Print multiplication table.
let number = 5;
for (let i = 1; i <= 10; i++) {
	console.log(number + ' x ' + i + ' = ' + number * i);
}

// 9. Print squares from 1-10.
for (let i = 1; i <= 10; i++) {
	console.log(i * i);
}

// 10. Print cubes from 1-10.
for (let i = 1; i <= 10; i++) {
	console.log(i * i * i);
}

// Intermediate (11-20)

// 11. Factorial of a number.
number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
	factorial *= i;
}
console.log(factorial);

// 12. Fibonacci series.
let count = 10;
let first = 0;
let second = 1;
for (let i = 1; i <= count; i++) {
	console.log(first);
	let next = first + second;
	first = second;
	second = next;
}

// 13. Reverse a number.
number = 12345;
let reversed = 0;
while (number > 0) {
	let digit = number % 10;
	reversed = reversed * 10 + digit;
	number = (number - digit) / 10;
}
console.log(reversed);

// 14. Count digits in a number.
number = 12345;
let digits = 0;
let temporary = number;
while (temporary > 0) {
	digits++;
	temporary = (temporary - temporary % 10) / 10;
}
console.log(digits);

// 15. Sum of digits.
number = 12345;
sum = 0;
while (number > 0) {
	digit = number % 10;
	sum += digit;
	number = (number - digit) / 10;
}
console.log(sum);

// 16. Check palindrome number.
number = 1221;
let original = number;
reversed = 0;
while (number > 0) {
	digit = number % 10;
	reversed = reversed * 10 + digit;
	number = (number - digit) / 10;
}
console.log(original === reversed);

// 17. Check Armstrong number.
number = 153;
original = number;
let digitCount = 0;
temporary = number;
while (temporary > 0) {
	digitCount++;
	temporary = (temporary - temporary % 10) / 10;
}
sum = 0;
temporary = number;
while (temporary > 0) {
	digit = temporary % 10;
	let power = 1;
	for (let i = 1; i <= digitCount; i++) power *= digit;
	sum += power;
	temporary = (temporary - digit) / 10;
}
console.log(sum === original);

// 18. Check prime number.
number = 29;
let prime = number >= 2;
for (let i = 2; i < number && prime; i++) {
	if (number % i === 0) prime = false;
}
console.log(prime);

// 19. Print prime numbers from 1-100.
for (number = 2; number <= 100; number++) {
	prime = true;
	for (let i = 2; i < number; i++) {
		if (number % i === 0) prime = false;
	}
	if (prime) console.log(number);
}

// 20. Greatest common divisor (GCD).
let a = 48;
let b = 18;
while (b !== 0) {
	let remainder = a % b;
	a = b;
	b = remainder;
}
console.log(a);

// Advanced (21-35)

// 21. Least common multiple (LCM).
let firstNumber = 12;
let secondNumber = 18;
a = firstNumber;
b = secondNumber;
while (b !== 0) {
	remainder = a % b;
	a = b;
	b = remainder;
}
console.log((firstNumber * secondNumber) / a);

// 22. Star square pattern.
let size = 5;
for (let row = 1; row <= size; row++) {
	let line = '';
	for (let column = 1; column <= size; column++) line += '* ';
	console.log(line);
}

// 23. Right triangle star pattern.
for (let row = 1; row <= size; row++) {
	line = '';
	for (let column = 1; column <= row; column++) line += '* ';
	console.log(line);
}

// 24. Inverted triangle.
for (let row = size; row >= 1; row--) {
	line = '';
	for (let column = 1; column <= row; column++) line += '* ';
	console.log(line);
}

// 25. Number triangle.
for (let row = 1; row <= size; row++) {
	line = '';
	for (let value = 1; value <= row; value++) line += value + ' ';
	console.log(line);
}

// 26. Floyd's triangle.
let value = 1;
for (let row = 1; row <= size; row++) {
	line = '';
	for (let column = 1; column <= row; column++) line += value++ + ' ';
	console.log(line);
}

// 27. Multiplication tables from 1-10.
for (number = 1; number <= 10; number++) {
	for (let i = 1; i <= 10; i++) {
		console.log(number + ' x ' + i + ' = ' + number * i);
	}
}

// 28. Count vowels in a string.
let text = 'JavaScript';
let vowels = 0;
for (let i = 0; i < text.length; i++) {
	let character = text[i];
	if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ||
		character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
		vowels++;
	}
}
console.log(vowels);

// 29. Reverse a string.
text = 'hello';
reversed = '';
for (let i = text.length - 1; i >= 0; i--) reversed += text[i];
console.log(reversed);

// 30. Count uppercase and lowercase letters.
text = 'Hello World';
let uppercase = 0;
let lowercase = 0;
for (let i = 0; i < text.length; i++) {
	character = text[i];
	if (character >= 'A' && character <= 'Z') uppercase++;
	if (character >= 'a' && character <= 'z') lowercase++;
}
console.log(uppercase, lowercase);

// 31. Print all factors of a number.
number = 24;
for (let i = 1; i <= number; i++) {
	if (number % i === 0) console.log(i);
}

// 32. Check perfect number.
number = 28;
sum = 0;
for (let i = 1; i < number; i++) {
	if (number % i === 0) sum += i;
}
console.log(sum === number);

// 33. Print ASCII values of A-Z.
for (let code = 65; code <= 90; code++) {
	console.log(code);
}

// 34. Generate random numbers until one is greater than 90.
let randomNumber = 0;
while (randomNumber <= 90) {
	randomNumber = Math.floor(Math.random() * 100) + 1;
	console.log(randomNumber);
}

// 35. Find the largest digit in a number.
number = 58329;
let largest = 0;
while (number > 0) {
	digit = number % 10;
	if (digit > largest) largest = digit;
	number = (number - digit) / 10;
}
console.log(largest);
