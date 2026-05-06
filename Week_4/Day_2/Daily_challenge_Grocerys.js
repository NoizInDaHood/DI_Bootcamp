// What You will learn :
// Objects
// Reference and Value


// Instructions
// Using this object :

// let client = "John";

// const groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         paid : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.


let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries = () => {
    let user = client; // This creates a copy of the string value, so user is independent of client
    client = "Betty"; // Changing client does not affect user because strings are primitive values and are passed by value
    let shopping = groceries; // This creates a reference to the groceries object, so shopping and groceries point to the same object in memory
    shopping.totalPrice = "35$"; // Changing totalPrice through shopping will affect groceries because they reference the same object
    shopping.other.paid = false; // Changing paid through shopping will also affect groceries for the same reason

    console.log(`Client: ${client}`); // Output: Client: Betty
    console.log(`User: ${user}`); // Output: User: John
    console.log(groceries);
    console.log(shopping);
};
displayGroceries();

cloneGroceries();
