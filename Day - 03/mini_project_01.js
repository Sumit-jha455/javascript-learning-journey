// Grade Calculator
const marks = 85; // Change this value to test different marks.

let grade;

if (marks >= 90 && marks <= 100) {
	grade = "A";
} else if (marks >= 75) {
	grade = "B";
} else if (marks >= 60) {
	grade = "C";
} else if (marks >= 40) {
	grade = "D";
} else {
	grade = "Fail";
}

const status = marks >= 40 && marks <= 100 ? "Pass" : "Fail";

console.log(`Marks: ${marks}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
