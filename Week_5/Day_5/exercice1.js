//  Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.

function compareToTen(num) {
    return new Promise ((resolve, reject) => {
        if (num <= 10) {
            resolve("This is number is less or equal than 10");
        }else{
            reject("Error: This number is greater than 10 ;(")
        };
    });
};
compareToTen(10)
.then(result => console.log(result))
.catch(error => console.log(error));