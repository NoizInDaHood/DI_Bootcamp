// What You’ll learn today
// How to create a function using union types to validate variable types.
// How to compare the type of a value against a list of allowed types.
// How to use loops in TypeScript to iterate through an array of allowed types.
// How to use TypeScript’s typeof operator for type checking.


// Description
// Create a function called validateUnionType that accepts a value and an array of allowed types (as strings).
// The function should check if the value is of one of the allowed types and return true if it is; otherwise,
// it should return false. Use this function to validate the type of variables in a program.



// Exercise
// Create a function called validateUnionType(value: any, allowedTypes: string[]): boolean that takes a value
// and an array of allowed types (as strings).
// The function should return true if the value is one of the allowed types; otherwise, it should return false.

// Demonstrate its usage by validating variables with different types.

function validateUnionType(value: any, allowedTypes: string[]): boolean {
    return allowedTypes.includes(typeof value)
}
console.log(validateUnionType("Zion", ["string"])); // should return True
console.log(validateUnionType(42, ["string"])); // should return False
console.log(validateUnionType(42, ["number"])); // should return True
console.log(validateUnionType(true, ["boolean"])); // should return True
console.log(validateUnionType(false, ["number"])); // should return False

