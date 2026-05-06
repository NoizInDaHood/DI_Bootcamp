// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// *********

let inputUser = prompt("Hello, please type few words separated by commas.");
while (inputUser.trim() === "") {
    inputUser = prompt("Hello, please type some words separated by commas.");
};
const cleanInput = inputUser.replaceAll(" ", "");

const arrWords = cleanInput.trim().split(",");

const longestWord = arrWords.reduce((longest, currentWord) => {
    if (currentWord.length > longest.length) {
        return currentWord;
    } else {
        return longest;
    };

});

console.log("*".repeat(longestWord.length + 4));
arrWords.forEach(word => {
    let diffLongest = longestWord.length - word.length;
    console.log("x "+ word + " ".repeat(diffLongest) + " x");
});
console.log("*".repeat(longestWord.length + 4));

