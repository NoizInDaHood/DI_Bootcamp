"use strict";
//////////////////// DAILY CHALLENGE LOGIC ////////////////////
const defaultProgress = {
    xp: 320,
    level: 4,
    streak: 7,
    completedChallenges: []
};
//////////////////// DECLARE GLOBAL VARIABLES ////////////////////
// I get all my challenges from the JSON on page loading
// I make sure the data in JSON will be viewed as CardChallenge object 
let challenges = [];
async function loadChallenges() {
    try {
        const response = await fetch("./hack-a-tuna-challenges-10800-exercices.json");
        if (!response.ok) {
            throw new Error("Failed to load challenges 