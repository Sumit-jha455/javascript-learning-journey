// Number Guessing Game
const secretNumber = 7;
let guess;

do {
	guess = Number(prompt("Guess the secret number:"));

	if (guess > secretNumber) {
		console.log("Too High");
	} else if (guess < secretNumber) {
		console.log("Too Low");
	} else {
		console.log("Correct!");
	}
} while (guess !== secretNumber);
