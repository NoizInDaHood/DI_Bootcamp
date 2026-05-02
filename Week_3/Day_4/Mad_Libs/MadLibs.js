// Get the value of each of the inputs in the HTML file when the form
//     is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed
// (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

const form = document.getElementById("libform");
const btnShuffle = document.getElementById("btnShuffle");
form.addEventListener("submit",(ev) => {
    ev.preventDefault();
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;
    if (noun && adjective && person && verb && place) {
        const story = ` Once upon a time, there was a ${adjective} ${noun} named ${person}. ${person} loved to ${verb} in the ${place}. One day, while ${verb}ing, ${person} found a magical treasure that changed everything!`;
        document.getElementById("story").textContent = story;
    }
    else {
    alert("At least 1 field is missing for the game to be able to work!");
    }
});

btnShuffle.addEventListener("click", (ev) => {
    ev.preventDefault();
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;
    const story = document.getElementById("story").textContent;
    const newStory = `In a faraway kingdom, ${person} discovered a ${adjective} ${noun} hidden inside the ${place}. Every night, ${person} would ${verb} near it, until one day the ${noun} began to glow and revealed a secret door.`;
    const newStory2 = `Deep in the ${place}, ${person} met a ${adjective} ${noun} that could speak. It told ${person} to ${verb} before sunset, or the entire ${place} would disappear forever.`;
    const newStory3 = `One morning, ${person} found a ${adjective} ${noun} waiting at the entrance of the ${place}. Without thinking, ${person} decided to ${verb}, and suddenly the sky turned purple.`;
    const newStory4 = `Nobody believed ${person} when they said a ${adjective} ${noun} was hiding in the ${place}. But when ${person} started to ${verb}, the ${noun} opened a portal to another world.`;
    const allStories = [newStory,newStory2,newStory3,newStory4];
    if (story) {
        document.getElementById("story").textContent = allStories[Math.floor(Math.random()* allStories.length)];
    }
    else {
        alert("You must have a story before to be able to shuffle it! ;-)");
    };

});