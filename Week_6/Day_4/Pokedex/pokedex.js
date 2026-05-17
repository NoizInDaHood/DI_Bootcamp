const btnPress = document.getElementById("btnPress");
const btnRight = document.getElementById("btnRight");
const btnLeft = document.getElementById("btnLeft");

const titlePok = document.getElementById("titlePoke");
const numPok = document.getElementById("pokeNum");
const pokeHP = document.getElementById("pokeHP");
const pokeType = document.getElementById("pokeType");
const pokeAtack = document.getElementById("pokeAttack");
const pokeWeight = document.getElementById("pokeWeight");
const pokeDef = document.getElementById("pokeDefense");
const pokeHeight = document.getElementById("pokeHeight");
const pokeSpecialAttack = document.getElementById("pokeSpecialAttack");
const pokeAbility = document.getElementById("pokeAbility");
const pokeSpecialDefense = document.getElementById("pokeSpecialDefense");
const pokeMoveAmount = document.getElementById("pokeMoveAmount");
const pokeSpeed = document.getElementById("pokeSpeed");
const pokeBaseXP = document.getElementById("pokeBaseXp");

const pokeImage = document.getElementById("pokeImage");

const loadScreen1 = document.getElementById("loadingScreenImage");
const loadScreen2 = document.getElementById("loadingScreenInfos");
const blockImage = document.getElementById("blocImage");
const blockInfo = document.getElementById("blocInfos");
const blockInfoStart = document.getElementById("blockInfoStart");

function randomPoke() {
    return Math.floor(Math.random() *1350) + 1;
};
let currentPokeID;

function getNewPokemon(id) {
    // activer mon loader image
    loadScreen1.style.visibility = "visible";
    blockImage.style.display = "none";
    pokeImage.style.display = "none";
    // activer mon loader info
    loadScreen2.style.visibility = "visible";
    blockInfo.style.display = "none";
    blockInfoStart.style.display = "none";
    
    // RECUPERER LES INFOS API
    
    const apiPoke = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    apiPoke
    .then(response =>{
        if (!response.ok) {
            throw new Error("Problem with the API request");
        }
        return response.json();
    })
    // CHERCHER LES DATA
    .then (data => {
        const titlePokData = data.name;
        const numPokeData = data.id;
        const pokeHPData = data.stats[0].base_stat;
        const pokeTypeData = data.types.map(oneType => oneType.type.name).join(" / ");
        const pokeAtackData = data.stats[1].base_stat;
        const pokeWeightData = data.weight;
        const pokeDefData = data.stats[2].base_stat;
        const pokeHeightData = data.height;
        const pokeSpecialAttackData = data.stats[3].base_stat;
        const pokeAbilityData = data.abilities
        .filter(oneAbility => oneAbility.is_hidden === false)
        .map(oneAbility => oneAbility.ability.name)
        .join(" / ");
        const pokeSpecialDefenseData = data.stats[4].base_stat;
        const pokeMoveAmountData = data.moves.length;
        const pokeSpeedData = data.stats[5].base_stat;
        const pokeBaseXPData = data.base_experience;
        const pokeImageData = data.sprites.front_default;
    // ATTRIBUER LES DATA AU TEXT CONTENT DE MES ELEMENTS
        titlePok.textContent = titlePokData;
        numPok.textContent = numPokeData;
        pokeHP.textContent = pokeHPData;
        pokeType.textContent = pokeTypeData;
        pokeAtack.textContent = pokeAtackData;
        pokeWeight.textContent = pokeWeightData;
        pokeDef.textContent = pokeDefData;
        pokeHeight.textContent = pokeHeightData;
        pokeSpecialAttack.textContent = pokeSpecialAttackData;
        pokeAbility.textContent = pokeAbilityData;
        pokeSpecialDefense.textContent = pokeSpecialDefenseData;
        pokeMoveAmount.textContent = pokeMoveAmountData;
        pokeSpeed.textContent = pokeSpeedData;
        pokeBaseXP.textContent = pokeBaseXPData;
        pokeImage.src = pokeImageData;
        currentPokeID = numPokeData;
    })
    // AJOUTER UN TEMPS DE LOADING PR VISUALISER LES ANIMATIONS
    .then(() => new Promise(resolve => setTimeout(resolve, 1200)))
    .then(() => {
        // STOP LOADING 1 - DISPLAY SCREEN 1
        loadScreen1.style.visibility = "hidden";
        pokeImage.style.display = "flex";
        blockImage.style.display = "flex";
        // STOP LOADING 2 - DISPLAY SCREEN 2
        loadScreen2.style.visibility = "hidden";
        blockInfo.style.display = "flex";
    })
    .catch(err => {
        console.log(err);
        loadScreen1.style.visibility = "hidden";
        loadScreen2.style.visibility = "hidden";
        blockImage.style.display = "flex";
        blockInfo.style.display = "flex";
        titlePok.textContent = "Oh No!";
        numPok.textContent = "This Pokemon isn't availale";
        pokeHP.textContent = "";
        pokeType.textContent = "";
        pokeAtack.textContent = "";
        pokeWeight.textContent = "";
        pokeDef.textContent = "";
        pokeHeight.textContent = "";
        pokeSpecialAttack.textContent = "";
        pokeAbility.textContent = "";
        pokeSpecialDefense.textContent = "";
        pokeMoveAmount.textContent = "";
        pokeSpeed.textContent = "";
        pokeBaseXP.textContent = "";
    });

};



btnPress.addEventListener("click", ev => {
    ev.preventDefault();
    getNewPokemon(randomPoke());

});
btnLeft.addEventListener("click", ev => {
    ev.preventDefault();
    getNewPokemon(currentPokeID -1);
})
btnRight.addEventListener("click", ev => {
    ev.preventDefault();
    getNewPokemon(currentPokeID +1);
})