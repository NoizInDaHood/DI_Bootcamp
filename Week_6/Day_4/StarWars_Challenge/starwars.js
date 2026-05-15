const btnChoose = document.getElementById("btnChoose");
const panelContainer = document.getElementById("panelContainer");
const loadPanel = document.getElementById("loadPanel");
const resultPanel = document.getElementById("resultPanel");
const nameDisplayed = document.getElementById("name");
const genderDisplayed = document.getElementById("gender");
const heightDisplayed = document.getElementById("height");
const birthYearDisplayed = document.getElementById("birthYear");
const eyesColorDisplayed = document.getElementById("eyesColor");
const hairColorDisplayed = document.getElementById("hairColor");
    

btnChoose.addEventListener("click", ev => {
    ev.preventDefault();
    panelContainer.style.visibility = "visible";
    loadPanel.style.display = "flex";
    resultPanel.style.display = "none";
    function getRandom83() {
        return Math.floor(Math.random() * 83) +1 ;
    }
    const apiStarWars = fetch(`https://www.swapi.tech/api/people/${getRandom83()}`);
    apiStarWars
    .then(response => {
        if (!response.ok) {
            throw new Error("Problem with the API request");
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        const properties = data.result.properties;
        const name = properties.name;
        const height = properties.height;
        const gender= properties.gender;
        const birthYear = properties.birth_year;
        const eyesColor = properties.eye_color;
        const hairColor = properties.hair_color;
        nameDisplayed.textContent = name;
        genderDisplayed.textContent = gender;
        heightDisplayed.textContent = height;
        birthYearDisplayed.textContent = birthYear;
        eyesColorDisplayed.textContent = eyesColor;
        hairColorDisplayed.textContent = hairColor;
    })
    .then(() => new Promise(resolve => setTimeout(resolve, 1200)))
    .then(() => {
        loadPanel.style.display = "none";
        resultPanel.style.display = "flex";
    })
    .catch(err => {
        console.log(err);
        loadPanel.style.display = "none";
        resultPanel.style.display = "flex";
        nameDisplayed.textContent = "Oh No!";
        genderDisplayed.textContent = "That person isn't available.";
        heightDisplayed.textContent = "";
        birthYearDisplayed.textContent = "";
        eyesColorDisplayed.textContent = "";
        hairColorDisplayed.textContent = "";
    });
});

