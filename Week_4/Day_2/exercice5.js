// Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function weightDec(kilos) {
   return kilos * 1000;
};
/// difference between function declaration and function expression > one is solitary and is not associated with a variable, the other is associated to a variable and might be more readable, especially if doing the expression in a one line simplified arrow function in case there is only one operation to perform. 
weightExp = kilos => {
    return kilos * 1000;
};

weighOneLineExp = kilos => kilos * 1000;

console.log(weightDec(5));
console.log(weightExp(5));
console.log(weighOneLineExp(5));
