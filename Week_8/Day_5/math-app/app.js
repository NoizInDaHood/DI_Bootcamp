// Exercise 5: Creating and Using a Custom Module
// Instructions
// Create a directory named math-app.

// Inside the math-app directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the lodash package, a utility library, by running npm install lodash in the terminal.

// Create a file named math.js inside the math-app directory.

// In math.js, define a simple custom module that exports functions for addition and multiplication.

// Create a file named app.js in the same directory.

// In app.js, require the lodash package and the custom math module.

// Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.

// Run app.js using Node.js and verify that the calculations are correct.




// Common JS
// const _ = require("lodash");
// const math = require("./math");

// const additionResult = math.add(5, 3);

// const multiplicationResult = math.multiply(4, 2);

// console.log("Addition:", additionResult);

// console.log("Multiplication:", multiplicationResult);

// const numbers = [10, 5, 20, 3];

// console.log("Lodash max:", _.max(numbers));

// console.log("Lodash sum:", _.sum(numbers));

// E6 MODERN IMPORT

import _ from "lodash";
import { add, multiply } from "./math.js";

const additionResult = add(5, 3);
const multiplicationResult = multiply(4, 2);

console.log("Addition:", additionResult);
console.log("Multiplication:", multiplicationResult);

const numbers = [10, 5, 20, 3];

console.log("Lodash max:", _.max(numbers));
console.log("Lodash sum:", _.sum(numbers));
