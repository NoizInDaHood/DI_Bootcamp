// Exercise 5: Extending Interfaces with Optional and Readonly Properties
// What You Will Learn:

// How to extend an interface to add new properties.
// How to use optional and readonly properties in interfaces.


// Instructions:
// Create an interface User with properties id (readonly), name, and email. Extend the User interface
//  to create a PremiumUser interface with an additional optional property membershipLevel. 
// Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.

interface User {
    readonly id: number,
    name: string,
    email: string,
};

interface PremiumUser extends User {
    membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);

    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    } else {
        console.log("Membership Level: No premium membership");
    }
}

const user1: PremiumUser = {
    id: 1,
    name: "David",
    email: "david@example.com",
    membershipLevel: "Gold"
};

const user2: PremiumUser = {
    id: 2,
    name: "Sarah",
    email: "sarah@example.com"
};

printUserDetails(user1);
printUserDetails(user2);

// user1.id = 3; // Error: id is readonly

