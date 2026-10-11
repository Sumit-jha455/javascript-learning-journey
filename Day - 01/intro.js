// 📘 What is JavaScript?
// JavaScript is a programming language used to make web pages interactive.

// It runs in the browser and allows you to add dynamic behavior (like animations, form validation, pop‑ups).

// 🎯 Why do we use JavaScript?
// To manipulate HTML & CSS (change content, styles, structure).

// To respond to user actions (clicks, typing, scrolling).

// To validate forms before submission.

// To create dynamic effects (sliders, dropdowns, games).

// 🌐 How JavaScript works with HTML & CSS
// HTML → provides structure (headings, paragraphs, buttons).

// CSS → provides styling (colors, fonts, layouts).

// JavaScript → adds behavior (what happens when you click a button).

// 👉 Example:

// html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JS Example</title>
//   <style>
//     p { color: blue; }
//   </style>
// </head>
// <body>
//   <p id="text">Hello Sumit!</p>
//   <button onclick="changeText()">Click Me</button>

//   <script>
//     function changeText() {
//       document.getElementById("text").innerHTML = "You clicked the button!";
//     }
//   </script>
// </body>
// </html>

// Here:

// HTML → <p> and <button>

// CSS → makes text blue

// JS → changes text when button is clicked

// 📂 Internal vs External JavaScript
// Internal JS: Written inside <script> tags in the HTML file.

// External JS: Written in a separate .js file and linked with <script src="file.js"></script>.

// 👉 Example (Internal):

// html
// <script>
//   alert("Hello from Internal JS!");
// </script>


// 👉 Example (External):

// html
// <!-- index.html -->
// <script src="script.js"></script>

// <!-- script.js -->
// alert("Hello from External JS!");


// 🖥️ console.log()
// Used to print messages in the browser’s console (for debugging).

// javascript
// console.log("This is a test message");


// 💬 Comments in JavaScript

// Single-line comment: // This is a comment

// Multi-line comment:

// javascript
// /* 
// This is a 
// multi-line comment 
// */


// 📝 Beginner Program Example
// html
<!DOCTYPE html>
<html>
<head>
  <title>JS Basics</title>
</head>
<body>
  <h2>JavaScript Demo</h2>
  <button onclick="showMessage()">Click Me</button>

  <script>
    // Function to show message
    function showMessage() {
      console.log("Button was clicked!"); // Debug message
      alert("Hello, welcome to JavaScript!"); /* Popup message */
    }
    </script>
</body>
</html>