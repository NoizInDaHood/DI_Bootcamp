// Exercise 7: Type Assertions and Generic Constraints
// What You Will Learn
// Use type assertions to refine types in complex scenarios.
// Apply generic constraints to ensure type safety.
// Task
// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method. 
// Use type assertions to ensure the parameter is treated as a string for formatting. The function should format the input as a string.

function formatInput<T extends { toString(): string }>(input: T): string {
    const formattedInput = input.toString() as string;
    return `Formatted input: ${formattedInput}`;
}

console.log(formatInput("hello"));
console.log(formatInput(123));
console.log(formatInput(true));
console.log(formatInput(["TypeScript", "JavaScript"]));