const container = document.getElementById("container");
const square = document.getElementById("animate");

function myMove() {
    let position = 0;
    let timer = setInterval(function() {
      square.style.left = position + "px";
      position ++;
      if (position >= 350) {
        clearInterval(timer);
    }
    }, 1);
}

