const string = "Hello world, welcome to the universe.";
const string2 = ""
function isBlank(x) {
    if (x === "") {
        return true
    }else{
        return false
    };
};

console.log(isBlank(string2));


const fullName = "Robin Singh";

function abbrevName(x) {
    const arrName = x.trim().split(" ");
    const firstName = arrName[0];
    const secondName = arrName[1][0];
    return `${firstName} ${secondName}.`
}

console.log(abbrevName(fullName));

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

function swapCase(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
        const letter = x[i];
        if (letter === letter.toUpperCase()) {
            result += letter.toLowerCase();
        } else {
            result += letter.toUpperCase();
        }
    }    return result;
}