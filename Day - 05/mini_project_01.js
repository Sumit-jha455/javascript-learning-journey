// Mini Project 1: Calculator Using Functions

function addition(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

function subtraction(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
}

function multiplication(firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
	if (secondNumber === 0) {
		return "Cannot divide by zero";
	}

	return firstNumber / secondNumber;
}

function modulus(firstNumber, secondNumber) {
	if (secondNumber === 0) {
		return "Cannot find modulus by zero";
	}

	return firstNumber % secondNumber;
}

const firstNumber = Number(prompt("Enter the first number:"));
const secondNumber = Number(prompt("Enter the second number:"));
const operation = prompt(
	"Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus"
);

let result;

switch (operation) {
	case "1":
		result = addition(firstNumber, secondNumber);
		break;
	case "2":
		result = subtraction(firstNumber, secondNumber);
		break;
	case "3":
		result = multiplication(firstNumber, secondNumber);
		break;
	case "4":
		result = division(firstNumber, secondNumber);
		break;
	case "5":
		result = modulus(firstNumber, secondNumber);
		break;
	default:
		result = "Invalid operation selected";
}

console.log(`Result: ${result}`);
