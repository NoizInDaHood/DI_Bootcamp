// Exercise 6: Intersection Types and Type Guards
// What You Will Learn
// Combine types using intersection types.
// Use type guards to handle complex types safely.
// Task
// Define a type Employee that combines Person and Job using intersection types. Create a function describeEmployee that takes an
//  Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

type Person = {
    name: string;
    age: number;
};

type Job = {
    position: "Manager" | "Developer";
    department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return `${employee.name} is a ${employee.age}-year-old manager in the ${employee.department} department.`;
    }

    if (employee.position === "Developer") {
        return `${employee.name} is a ${employee.age}-year-old developer in the ${employee.department} department.`;
    }

    return "Unknown employee position.";
}

const manager: Employee = {
    name: "Sarah",
    age: 35,
    position: "Manager",
    department: "Sales"
};

const developer: Employee = {
    name: "David",
    age: 28,
    position: "Developer",
    department: "Engineering"
};

console.log(describeEmployee(manager));
console.log(describeEmployee(developer));
