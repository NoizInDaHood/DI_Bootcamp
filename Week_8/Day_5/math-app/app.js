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
