// Data Types
const stringValue = "Hello";
const numberValue = 42;
const booleanValue = true;
const undefinedValue = undefined;
const nullValue = null;

console.log("1. Store values of different data types:", stringValue, numberValue, booleanValue, undefinedValue, nullValue);
console.log("2. Print the type of each variable:", typeof stringValue, typeof numberValue, typeof booleanValue, typeof undefinedValue, typeof nullValue);
console.log("3. Check the type of an array:", typeof [1, 2, 3]);
console.log("4. Check the type of null:", typeof null);
console.log("5. Check the type of undefined:", typeof undefined);
console.log('6. Convert the string "50" into a number:', Number("50"));
console.log("7. Convert 200 into a string:", String(200));
console.log("8. Convert 0 into a boolean:", Boolean(0));
console.log('9. Convert "true" using Boolean():', Boolean("true"));
console.log("10. Compare null and undefined:", null == undefined);

// Operators
console.log("11. Add two numbers:", 10 + 20);
console.log("12. Find the remainder of two numbers:", 17 % 5);
console.log("13. Find the square of a number:", 6 ** 2);

let firstNumber = 5;
let secondNumber = 10;
[firstNumber, secondNumber] = [secondNumber, firstNumber];
console.log("14. Swap two numbers without a third variable:", firstNumber, secondNumber);

let score = 10;
score += 5;
console.log("15. Use += to update a variable:", score);
console.log("16. Compare two numbers using >:", 20 > 15);
console.log("17. Compare using ==:", 5 == "5");
console.log("18. Compare using ===:", 5 === "5");
console.log("19. Check if a number is even using %:", 8 % 2 === 0);
console.log("20. Use logical AND to check age and citizenship:", 20 >= 18 && true);
console.log("21. Use logical OR to check weekend:", "Saturday" === "Saturday" || "Saturday" === "Sunday");
console.log("22. Use NOT operator on a boolean:", !true);
console.log("23. Find the largest of two numbers using a ternary operator:", 25 > 18 ? 25 : 18);
console.log("24. Check if a student passed using a ternary operator:", 65 >= 40 ? "Passed" : "Failed");
console.log("25. Print Adult or Minor using a ternary operator:", 18 >= 18 ? "Adult" : "Minor");
