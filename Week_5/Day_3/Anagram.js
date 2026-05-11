// Functions
// Array methods


// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.
const firstString = "Dormitory";
const secondString = "Dirty room";

function isAnagram(string1, string2) {

    const arrFromString1 = string1.toLowerCase().replaceAll(" ","").split("");
    const arrFromString2 = string2.toLowerCase().replaceAll(" ","").split("");
    count1 = {};
    count2 = {};
    arrFromString1.forEach(letter =>{
        if (count1[letter] === undefined){
            count1[letter] = 1;
        }else{
            count1[letter]++;
        };
    });
    arrFromString2.forEach(letter =>{
        if (count2[letter] === undefined){
            count2[letter] = 1;
        }else{
            count2[letter]++;
        };
    });
    const key1 = Object.keys(count1);
    const key2 = Object.keys(count2);
    if (key1.length !== key2.length){
        return false;
    };
    for (let key of key1){
        if (count1[key] !== count2[key]){
            return false;
        };
    };
    return true;
    
};

console.log(isAnagram(firstString,secondString));