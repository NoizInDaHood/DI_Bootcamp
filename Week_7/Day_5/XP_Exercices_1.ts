// Exercise 1: Intersection Types
// What You Will Learn:
// Combine multiple types into one.
// Create a type that includes all properties from several types.
// Task
// Define an intersection type PersonWithAddress that combines Person and Address types. Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city,


type Person = {
    name: string;
    age: number;
}
type Address = {
    street:string;
    city:string;
}


type PersonWithAddress = Person & Address;

const newPerson: PersonWithAddress = {
    name:"Zion",
    age:45,
    street:"Sokolov",
    city:"Bat-Yam",
}
console.log(newPerson);
