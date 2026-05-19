const imgGIF = document.getElementById("imgGIF");
const form = document.getElementById("form");
const container = document.getElementById("container");

async function getRandomGif(word) {
    try {
        const request = await fetch(`http://api.giphy.com/v1/gifs/random?rating=g&tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&`);
        const requested = await request.json();
        console.log(requested);
        const newGif = document.createElement("div");
        newGif.classList.add("newGIF");
        const btnDel = document.createElement("button");
        btnDel.classList.add("btnDelete");
        btnDel.textContent = "Delete";
        btnDel.addEventListener("click", ev => {
            ev.preventDefault();
            newGif.remove();
        })
        const imgGif = document.createElement("img");
        imgGif.classList.add("imgGIF");
        imgGif.src = requested.data.images.original.url;
        container.appendChild(newGif);
        newGif.appendChild(btnDel);
        newGif.appendChild(imgGif);
    } catch (error) {
        console.log(error);
    }
}
form.addEventListener("submit", ev => {
    ev.preventDefault();
    getRandomGif(input.value);
})



