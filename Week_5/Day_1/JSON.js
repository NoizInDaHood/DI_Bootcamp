let chien = {
    name: "Calbo",
    race: "Bouldog",
    physicals: {
        eyes: "brown",
        weight: "52 kg",
        color: "black",
    }

};

const jsonChien = JSON.stringify(chien, null, 6);

console.log(jsonChien);