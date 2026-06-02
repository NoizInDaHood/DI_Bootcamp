// Exercise 1: Union Types
// What You Will Learn:
// How to use union types for flexible parameter handling.
// How to implement logic that processes different types.
// How to return appropriately formatted results based on the input type.
// Description:

// You’ll create a function that accepts either a string or a number. 
// The function formats numbers as currency and reverses strings. This exercise demonstrates how to use union types and handle different input types.

// Instructions
// Create the Function:

// Write a function called processValue that accepts one parameter of type string | number.
// If the input is a number, format it as a currency string (e.g., $100.00).
// If the input is a string, return the reversed version of the string.
// Test the Function:

// Call the processValue function with different inputs (both strings and numbers) to verify functionality.

function processValue(value: string | number): string {
    if (typeof value === "number"){
        return `$${value}.00`
    }else if (typeof value ==="string"){
        return value.split("").reverse().join("");
    }else{
        throw new Error("Type either a string or a number");
    }
}

console.log(processValue(56));
console.log(processValue("Hello"));
// console.log(processValue(true))