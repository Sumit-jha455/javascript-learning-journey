// 📘 Type Conversion
// JavaScript can convert values from one type to another.
// There are two types:

// Explicit Conversion → You manually convert using functions.

// Implicit Conversion (Type Coercion) → JavaScript automatically converts when performing operations.

// ✨ Explicit Conversion
// You tell JavaScript exactly what type you want.

// 1. Convert String → Number
// javascript
// let num = Number("100");
// console.log(num); // 100 (number)


// 2. Convert Number → String
// javascript
// let str = String(100);
// console.log(str); // "100" (string)


// 3. Convert Value → Boolean
// javascript
// console.log(Boolean(1));   // true
// console.log(Boolean(0));   // false
// console.log(Boolean(""));  // false
// console.log(Boolean("Hi")); // true


// 🔄 Implicit Conversion (Type Coercion)
// JavaScript automatically changes types depending on the operator.

// 1. "5" + 2
// javascript
// console.log("5" + 2); // "52"
// 👉 + operator with a string → converts number to string → concatenation.

// 2. "5" - 2
// javascript
// console.log("5" - 2); // 3
// 👉 - operator only works with numbers → "5" converted to number → subtraction.

// 3. true + 1
// javascript
// console.log(true + 1); // 2
// 👉 true → converted to 1 → 1 + 1 = 2.

// 4. false + 5
// javascript
// console.log(false + 5); // 5
// 👉 false → converted to 0 → 0 + 5 = 5.

// 🖥️ Example Program
// html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Type Conversion Demo</title>
// </head>
// <body>
//   <h2>Explicit vs Implicit Conversion</h2>
//   <script>
//     // Explicit Conversion
//     let num = Number("100");
//     let str = String(100);
//     let bool = Boolean(1);

//     console.log(num);   // 100
//     console.log(str);   // "100"
//     console.log(bool);  // true

//     // Implicit Conversion
//     console.log("5" + 2);   // "52"
//     console.log("5" - 2);   // 3
//     console.log(true + 1);  // 2
//     console.log(false + 5); // 5
//   </script>
// </body>
// </html>

/*
Number() → Converts a value to a number.

String() → Converts a value to a string.

Boolean() → Converts a value to a boolean (true or false).

*/

// Number.parseInt("123"); // 123
// Number.parseFloat("123.45"); // 123.45


// truthy values → true, 1, "non-empty string", [], {}, -1, (falsy values ke alawa) etc.
// falsy values → false, 0, "", null, undefined, NaN, document.all

!!undefined // false
!!(something) ---> it returns true if something is truthy, false if falsy.
