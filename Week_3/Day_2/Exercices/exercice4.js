// Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change 
// the 3 first functions, accordingly.
// ===============================================================================================================================================
//  Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(x) {
    let userNightNumber = x;
    const nightPrice = 140; 
    return userNightNumber * nightPrice;
}
// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
function planeRideCost(x) {
    let destinationUser = x
    const priceParis = 220;
    const priceLondon = 183;
    const priceOther = 300;
    if (destinationUser === "paris".toLowerCase()) {
        return priceParis
    }else if (destinationUser === "london".toLowerCase()) {
        return priceLondon
    }else{
        return priceOther
    };

};
// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost(x) {
    rentalDay = x
    dailyCost= 40
    if (rentalDay <= 10) {
         return rentalDay * dailyCost
    }else{
        let discount = rentalDay * dailyCost * 5 / 100
        return (rentalDay * dailyCost) - discount
    };
   
};


// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change 
// the 3 first functions, accordingly.

function totalVacationCost() {
    let userNightNumber = prompt("How many nights would you like to stay in the hotel?");
    while (userNightNumber.trim() === "" || isNaN(userNightNumber.trim())) {
        userNightNumber = prompt("Please type a valid number:");
    }
    let destinationUser = prompt("Please, enter your destination");
    while (destinationUser.trim() === "" || !isNaN(destinationUser.trim())) {
        destinationUser = prompt("Type a city you want to go");
    }
    let rentalDay = prompt("How many day(s) would you like to rent a car for?");
    while (rentalDay.trim() === "" || isNaN(rentalDay.trim())) {
        rentalDay = prompt("Please type the number of day(s) you want to rent a car.\nOr type 0 if you don't want to rent a car");
    }
    const totalCost = `$${hotelCost(userNightNumber)+planeRideCost(destinationUser)+rentalCarCost(rentalDay)}`
    return totalCost

}
totalVacationCost();