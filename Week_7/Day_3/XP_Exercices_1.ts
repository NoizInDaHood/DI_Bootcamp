// Exercise 1: Class with Access Modifiers
// What You Will Learn:

// How to use access modifiers (private, protected, and public) in a class.
// How to create methods that interact with private and protected properties.


// Instructions:
// Create a class Employee with the following properties:

// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. Create a public method getEmployeeInfo that returns the employee’s name and position.

class Employee {
    private name: string;
    private salary: number;
    position: string;
    protected department: string;
    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    public getEmployeeInfo(): string {
        return `${this.name} works as a ${this.position}`;
    }

}

// Exemple de test
const employee1 = new Employee("David", 5000, "Developer", "Tech");
console.log(employee1.getEmployeeInfo());