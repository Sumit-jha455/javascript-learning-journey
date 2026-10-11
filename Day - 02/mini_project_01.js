// Marks Percentage Calculator
const subject1 = 78;
const subject2 = 85;
const subject3 = 69;
const subject4 = 92;
const subject5 = 74;

const marks = [subject1, subject2, subject3, subject4, subject5];
const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const percentage = (totalMarks / (marks.length * 100)) * 100;
const averageMarks = totalMarks / marks.length;
const result = percentage >= 40 ? "Pass" : "Fail";

console.log("===== Marks Report =====");
console.log(`Total Marks: ${totalMarks}/${marks.length * 100}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Result: ${result}`);
