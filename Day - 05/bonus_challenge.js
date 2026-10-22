// 🏆 Bonus Challenge: Student Result Analyzer

const marks = [78, 85, 92, 67, 74];

function calculateTotal(scores) {
	return scores.reduce((total, mark) => total + mark, 0);
}

function calculateAverage(scores) {
	return scores.length ? calculateTotal(scores) / scores.length : 0;
}

function findHighestMark(scores) {
	return scores.length ? Math.max(...scores) : 0;
}

function findLowestMark(scores) {
	return scores.length ? Math.min(...scores) : 0;
}

function determineResult(scores, passMark = 40) {
	return scores.length > 0 && scores.every((mark) => mark >= passMark)
		? "Pass"
		: "Fail";
}

function displayReport(scores) {
	const total = calculateTotal(scores);
	const average = calculateAverage(scores);

	console.log("===== Student Result Report =====");
	console.log(`Marks: ${scores.join(", ")}`);
	console.log(`Total: ${total}`);
	console.log(`Average: ${average.toFixed(2)}`);
	console.log(`Highest Mark: ${findHighestMark(scores)}`);
	console.log(`Lowest Mark: ${findLowestMark(scores)}`);
	console.log(`Result: ${determineResult(scores)}`);
	console.log("=================================");
}

displayReport(marks);
