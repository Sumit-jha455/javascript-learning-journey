const number = Number(prompt("Enter a number:"));

if (Number.isNaN(number)) {
	console.log("Please enter a valid number.");
} else {
	console.log(`Multiplication Table of ${number}`);
	console.log("----------------------------");

	for (let i = 1; i <= 10; i++) {
		console.log(`${number} × ${i} = ${number * i}`);
	}
}
