// Exercise 3: Class Inheritance
// What You Will Learn:

// How to create a base class and extend it using inheritance.
// How to reuse properties and methods from the base class.


// Instructions:
// Create a base class Animal with a public property name and a method makeSound that returns a string. Create a subclass Dog that extends 
// Animal and overrides the makeSound method to return the sound a dog makes (“bark”).
// Create an instance of the Dog class and call the makeSound method.

class Animal {
    public name:string;
    constructor (name:string) {
        this.name = name
    }
        public makeSound(): string {
            return 'Sound'
        }
}
class Dog extends Animal {
    override makeSound(): string {
            return 'bark'
        }
}

const Leonard = new Dog("Leonard");

console.log(Leonard.makeSound());