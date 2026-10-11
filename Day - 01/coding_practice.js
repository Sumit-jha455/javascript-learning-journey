// 💻 Coding Practice (20 Questions)


// Easy

// Print Hello World.

console.log("Hello World");

// Store your name.

let name = "sumit kumar jha"

// Store your age.

let age = 25;

// Store your college.

let college = "Dronacharya Group of Institutions";

// Store your city.

let city = "New Delhi";

// Print all variables.
console.log(name, age, college, city);

// Change a let variable.
age = 26;
console.log(age);

// Try changing a const variable (observe the error).
// const PI = 3.14;
// PI = 3.14159; // This will cause an error

// Create five variables and print them.

let country = "India";
let state = "Delhi";
let language = "Hindi";
let profession = "Software Developer";
let hobby = "Reading";
console.log(country, state, language, profession, hobby);

// Print your favorite movie.

const favoriteMovie = "Mahabharata";
console.log(favoriteMovie);


// Medium

// Swap two variables.

let x = 5;
let y = 10;

console.log(x, y);

// Swap the values of x and y
let temp = x;
x = y;
y = temp;

console.log(x, y);

// Calculate rectangle area.

let length = 5;
let width = 10;
let rectangleArea = length * width;
console.log("Rectangle Area:", rectangleArea);

// Calculate circle area.

let radius = 7;
let circleArea = Math.PI * radius * radius;
console.log("Circle Area:", circleArea);

// Calculate simple interest.

let principal = 1000; // Principal amount
let rate = 5; // Annual interest rate in percentage
let time = 2; // Time in years

let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest:", simpleInterest);

// Calculate BMI.

let weight = 70; // in kilograms
let height = 1.75; // in meters
let bmi = weight / (height * height);
console.log("BMI:", bmi);

// Convert Celsius to Fahrenheit.

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Fahrenheit:", fahrenheit);

// Convert kilometers to meters.

let kilometers = 5;
let meters = kilometers * 1000;
console.log("Meters:", meters);

// Convert INR to USD (use a fixed conversion rate).

let inr = 100;
let usd = inr * 0.012; // Fixed conversion rate
console.log("USD:", usd);

// Calculate age from birth year.

let birthYear = 1998;
let currentYear = new Date().getFullYear();
let calculatedAge = currentYear - birthYear;
console.log("Calculated Age:", calculatedAge);


// Print all information using a template literal.

console.log(`Name: ${name}, Age: ${age}, College: ${college}, City: ${city}, Country: ${country}, State: ${state}, Language: ${language}, Profession: ${profession}, Hobby: ${hobby}, Favorite Movie: ${favoriteMovie}`);