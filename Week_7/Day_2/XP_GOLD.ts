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
// console.log(processValue(true));

// Exercise 2: Array Type Annotations
// What You Will Learn:
// How to specify array types in TypeScript.
// How to perform array operations like summing values.
// Description:

// Create a function that takes an array of numbers, strings, or both, and sums only the numbers. 
// You’ll practice working with arrays of different types and using type guards.

// Instructions
// Create the Function:
// Write a function named sumNumbersInArray that accepts an array of number | string.
// Iterate through the array and sum only the number values, ignoring strings.

// Test the Function:

// Test sumNumbersInArray with different arrays containing both numbers and strings.

function sumNumbersInArray(value: (number | string)[]): number {
    let total = 0;
    for (const item of value){
        if (typeof item === "number"){
            total += item;
        }
    }
    return total
}
console.log(sumNumbersInArray([2,5,3,"hello", 5]))

// Exercise 3: Type Aliases
// What You Will Learn:
// How to create and use type aliases for custom types.
// How to structure more complex objects for better maintainability.
// Description:

// You’ll create a type alias representing a user with multiple properties and write a function that processes the object to return a formatted string, including additional information if an optional property is present.

// Instructions
// Define a Type Alias:
// Create a type alias called AdvancedUser that represents a user object with the properties: name, age, and an optional address.

// Implement the Function:

// Write a function introduceAdvancedUser that takes an AdvancedUser and returns a greeting message including the user’s name and age.
// If the address property is present, include it in the greeting message.

// Test the Function:

// Test introduceAdvancedUser with and without the address property.

type AdvancedUser = {
    name:string,
    age:number,
    address?:string,
}

function introduceAdvancedUser(value: AdvancedUser): string {
    if (!value.address){
    return `Hello, welcome to ${value.name}, ${value.age} years old!`
    }else{
        return `Hello, welcome to ${value.name}, ${value.age} years old, living at ${value.address}`
    }
};

console.log(introduceAdvancedUser({name: "Zion",age: 17}));
console.log(introduceAdvancedUser({name: "Zion",age: 17, address: "Skolov 12, Bat Yam."}));

// Exercise 4: Optional Parameters
// What You Will Learn:
// How to use optional parameters and set default values.
// How to handle multiple input scenarios with conditional logic.
// Description:

// Create a function with an optional parameter for a greeting. Use conditional logic to apply a default greeting if none is provided.

// Instructions
// Create the Function:
// Write a function welcomeUser that takes a required name and an optional greeting.
// If no greeting is provided, use "Hello" as the default.

// Test the Function:

// Test welcomeUser with and without a custom greeting.

function welcomeUser(name: string, greeting: string = "Hello"): string {

  return `${greeting}, ${name}`;

}
