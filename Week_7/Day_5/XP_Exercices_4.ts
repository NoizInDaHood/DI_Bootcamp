// Exercise 4: Type Assertions with Union Types
// What You Will Learn
// Use type assertions to specify a type.
// Handle variables with union types.
// Task
// Create a function getFirstElement that takes an array of number | string and
//  uses type assertions to return the first element as a string. Test with arrays of mixed types

function getFirstElement(arr: (number|string)[]): string {
    let firstElem = arr[0] as string;
    return firstElem

}

const mixedArray1: (number | string)[