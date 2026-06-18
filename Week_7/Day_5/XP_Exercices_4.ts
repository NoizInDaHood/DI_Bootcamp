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

const mixedArray1: (number | string)[] = ["hello", 42, "world"];
const mixedArray2: (number | string)[] = ["TypeScript", 100, "test"];
const mixedArray3: (number | string)[] = [6, "7", "eight"];

console.log(getFirstElement(mixedArray1));
console.log(getFirstElement(mixedArray2));
console.log(getFirstElement(mixedArray3));
