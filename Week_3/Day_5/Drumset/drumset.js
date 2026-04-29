const baseURL = "https://raw.githubusercontent.com/devtlv/drumset_setup/master/sounds/";
const squares = document.querySelectorAll(".square");

// --- PARTIE CLIC ---
squares.forEach(square => {
    square.addEventListener("click", () => {
        // On utilise l'ID pour le son (ex: "boom", "clap"...)
        const audio = new Audio(`${baseURL}${square.id}.wav`);
        audio.play();

        square.classList.add("playing");

        setTimeout(() => {
            square.classList.remove("playing");
        }, 100);
    });
});

// --- PARTIE CLAVIER ---
window.addEventListener("keydown", (event) => {
    // 1. On récupère la touche (ex: "A")
    const key = event.key.toUpperCase(); 

    // 2. On transforme la NodeList en Array pour utiliser .find()
    // On cherche le carré dont le <p class="letter"> contient notre touche
    const targetSquare = Array.from(squares).find(sq => {
        return sq.querySelector(".letter").innerText.trim().toUpperCase() === key;
    });

    // 3. Si on a trouvé un carré correspondant, on simule le clic
    if (targetSquare) {
        targetSquare.click();
    }
});