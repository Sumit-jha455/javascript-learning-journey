// 🧠 Interview Questions — Answers

// 1. What are JavaScript data types?
// JavaScript has 8 data types:
// Primitive: string, number, bigint, boolean, undefined, symbol, and null.
// Non-primitive: object (including arrays, functions, and dates).

// 2. Difference between primitive and non-primitive data types.
// Primitive values are immutable and stored/assigned by value.
// Non-primitive values are mutable objects and are assigned by reference.

// 3. What does typeof do?
// typeof returns a string describing the type of a value.
typeof "hello"; // "string"
typeof 42;      // "number"

// 4. Why does typeof null return "object"?
// It is a historical JavaScript bug kept for backward compatibility.
typeof null; // "object"

// 5. Difference between == and ===.
// == compares values after implicit type conversion (loose equality).
// === compares both value and type without conversion (strict equality).
5 == "5";  // true
5 === "5"; // false

// 6. What is implicit type conversion?
// JavaScript automatically converts one type to another when needed.
"5" + 2; // "52"

// 7. What is explicit type conversion?
// Explicit conversion is when the developer intentionally changes a type.
Number("5");   // 5
String(25);     // "25"
Boolean(1);     // true

// 8. What are truthy and falsy values?
// Truthy values act like true in a Boolean context.
// Falsy values are: false, 0, -0, 0n, "", null, undefined, and NaN.
if ("hello") console.log("Truthy");

// 9. What are logical operators?
// && (AND), || (OR), and ! (NOT) are used to combine or invert conditions.
true && false; // false
true || false; // true
!true;         // false

// 10. Explain the ternary operator with an example.
// condition ? valueIfTrue : valueIfFalse
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
