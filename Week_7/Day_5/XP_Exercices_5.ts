// Exercise 5: Generic Constraints
// What You Will Learn
// Use generic constraints to limit type usage.
// Create a generic function that works with constrained types.
// Task
// Create a generic function logLength that takes a parameter of type T constrained to types with a length property (like string or Array). The function should log the length.

function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}

logLength("hello");
logLength([1, 2, 3, 4]);
logLength(["TypeScript", "JavaScript"]);