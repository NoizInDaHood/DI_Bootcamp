// Exercise 2: Type Guards with Union Types
// What You Will Learn
// Use type guards to handle different types.
// Perform actions based on the input type.
// Task
// Create a function describeValue that accepts number | string. Use type guards to return a description based on the input type:

// "This is a number" for numbers.
// "This is a string" for strings.

function describeValue(value:string|number): string {
    if (typeof value === "string")
        return `This is a string value`
    if (typeof value === "number")
        return `This is a number value`
    return `Unknown value`
};
console.log(describeValue(15));
consol