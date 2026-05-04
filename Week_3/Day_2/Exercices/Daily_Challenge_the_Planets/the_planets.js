// In this exercise we will be creating a webpage with a black background
// as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. 
// This div should have a class named "planet".

// Each planet should have a different background color.
// (Hint: you could add a new class to each planet - each class containing
//  a different background-color).

// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.

// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"   
];
const planColors = [
    "DarkGray",
    "Wheat",
    "SteelBlue",
    "FireBrick",
    "BurlyWood",
    "Khaki",
    "PaleTurquoise",
    "RoyalBlue"
];
const planetMoons = [
    0,
    0,
    1,
    2,
    4,
    7,
    5,
    1,
];

const planetData = planets.map((planet, index) => {
    return {
        name: planet,
        color: planColors[index],
        moonAmount: planetMoons[index]
    };
});
const section = document.querySelector(".listPlanets");

planetData.forEach((planet, index) => {
    const container = document.createElement("div");
    const planDiv = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    planDiv.classList.add("planet");
    planDiv.innerText = planet.name
    planDiv.classList.add(planet.name);
    const style = document.createElement("style");
    style.textContent = `
    .${planet.name} {
    background-color: ${planet.color};
    }
    `;

    document.head.appendChild(style);
    section.appendChild(container);
    container.appendChild(planDiv);
    for (let i = 0; i < planet.moonAmount; i++){
        const moon = document.createElement('div');
        moon.classList.add("moon");
        moon.style.position = "relative";
        moon.style.alignContent = "center";
        moon.style.justifyContent = "center";
        moon.style.textAlign = "center";
        moon.textContent = "Moon " + (i + 1);
        container.appendChild(moon);
    };
    
});

