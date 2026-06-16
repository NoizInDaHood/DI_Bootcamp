// Exercise 4: Static Properties and Methods
// What You Will Learn:

// How to use static properties and methods in a class.
// How to access static members without creating an instance of the class.


// Instructions:
// Create a class Calculator with the following static methods:

// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.

class Calculator {
    public static add(a: number, b: number): number {
        return a + b;
    }

    public static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(10, 5));
console.log(Calculator.subtract(10, 5));