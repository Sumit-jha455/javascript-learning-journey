// 📚 Variable Naming Rules in JavaScript


// ✅ Start with a letter, underscore _, or dollar sign $

// Examples:

// javascript
// let name = "Sweta";
// let _count = 10;
// let $price = 99.99;
// ❌ Cannot start with a number

// Wrong:

// javascript
// let 1value = 100; // ❌ Error
// ❌ Cannot use reserved keywords (like let, var, if, else, function)

// Wrong:

// javascript
// let var = 5; // ❌ Error



// ✅ Use camelCase convention (first word lowercase, next words capitalized)

// Examples:

// javascript
// let studentName = "Sweta"; 
// let totalMarks = 95;


// 🖥️ Example Program

// html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Variable Naming Rules</title>
// </head>
// <body>
//   <h2>JavaScript Variable Naming Demo</h2>
//   <script>
//     // Correct variable names
//     let userName = "Sweta";   // camelCase
//     let _score = 85;          // starts with underscore
//     let $currency = "INR";    // starts with $

//     // Incorrect examples (will cause errors if uncommented)
//     // let 1age = 20;          // ❌ starts with number
//     // let let = "keyword";    // ❌ reserved keyword

//     console.log(userName);
//     console.log(_score);
//     console.log($currency);
//   </script>
// </body>
// </html>