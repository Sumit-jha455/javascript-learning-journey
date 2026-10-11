// 🔢 Arithmetic Operators
// These perform basic math:

// + → addition (5 + 2 = 7)

// - → subtraction (5 - 2 = 3)

// * → multiplication (5 * 2 = 10)

// / → division (10 / 2 = 5)

// % → modulus (remainder) (10 % 3 = 1)

// ** → exponentiation (2 ** 3 = 8)

// 📝 Assignment Operators
// Used to assign or update values:

// = → assigns a value (let x = 5)

// += → adds and assigns (x += 2 means x = x + 2)

// -= → subtracts and assigns (x -= 2)

// *= → multiplies and assigns (x *= 2)

// /= → divides and assigns (x /= 2)

// ⚖️ Comparison Operators
// Used to compare values:

// == → equal in value (5 == "5" → true)

// === → equal in value and type (5 === "5" → false)

// != → not equal in value (5 != "5" → false)

// !== → not equal in value or type (5 !== "5" → true)

// > → greater than (7 > 5 → true)

// < → less than (7 < 5 → false)

// >= → greater than or equal (5 >= 5 → true)

// <= → less than or equal (4 <= 5 → true)

// 🔗 Logical Operators
// Used for combining conditions:

// && → AND (5 > 2 && 10 > 5 → true)

// || → OR (5 > 10 || 10 > 5 → true)

// ! → NOT (!(5 > 2) → false)

// ❓ Ternary Operator
// Shortcut for if...else:

// javascript
// let age = 18;
// let result = age >= 18 ? "Eligible" : "Not Eligible";
// console.log(result); // "Eligible"


// 🖥️ Example Program

// html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Operators Demo</title>
// </head>
// <body>
//   <h2>JavaScript Operators</h2>
//   <script>
//     // Arithmetic
//     console.log(5 + 2);   // 7
//     console.log(5 - 2);   // 3
//     console.log(5 * 2);   // 10
//     console.log(10 / 2);  // 5
//     console.log(10 % 3);  // 1
//     console.log(2 ** 3);  // 8

//     // Assignment
//     let x = 10;
//     x += 5; 
//     console.log(x); // 15

//     // Comparison
//     console.log(5 == "5");   // true
//     console.log(5 === "5");  // false

//     // Logical
//     console.log(5 > 2 && 10 > 5); // true
//     console.log(5 > 10 || 10 > 5); // true
//     console.log(!(5 > 2)); // false

//     // Ternary
//     let age = 16;
//     let eligibility = age >= 18 ? "Eligible" : "Not Eligible";
//     console.log(eligibility); // "Not Eligible"
//   </script>
// </body>
// </html>


// increment and decrement operators

// ++ → increment by 1 (let x = 5; x++; // x becomes 6)

// -- → decrement by 1 (let x = 5; x--; // x becomes 4)

// prefix and postfix forms:

// let x = 5;
// console.log(++x); // 6 (prefix: increments before returning)

// let y = 5;
// console.log(y++); // 5 (postfix: returns before incrementing)

// program to demonstrate increment and decrement operators:

// let a = 5;
// console.log("Initial value of a:", a);
// a++;
// console.log("After a++:", a); // 6
// a--;
// console.log("After a--:", a); // 5