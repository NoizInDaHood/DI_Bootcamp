const board = document.getElementById('boardGrid');
const numberOfSquare = 6500;
let selectColor = "black";
let isDrawing = false;
for (let i=0; i < numberOfSquare; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener("mousedown", function(){
        isDrawing = true;
        square.style.backgroundColor= selectColor
    });
    square.addEventListener("mouseover", function(){
        if (isDrawing === true) {
        square.style.backgroundColor= selectColor
    }})
    window.addEventListener("mouseup", function(){
        isDrawing = false;
    });
    board.appendChild(square)
}

const palette = ["gold","greenyellow","darkmagenta","darkgreen","darkblue","red","black","blue","olive","green","aqua","yellow","orange","purple","pink","cyan","azure","beige","magenta","lime","maroon","navy","teal","yellowgreen"]

for (let i = 0; i < palette.length; i++) {
    const colorSquare = document.createElement('div');
    colorSquare.classList.add('color');
    colorSquare.style.backgroundColor= palette[i];
    colorSquare.addEventListener("click", function(){
        selectColor = palette[i];
        const previousActive = document.querySelector(".activeColor");
        if (previousActive){
            previousActive.classList.remove("activeColor")
        }
        colorSquare.classList.add("activeColor");
    });
    colorPalette.appendChild(colorSquare)
}
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.backgroundColor = "white");
});
