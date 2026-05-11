const instructions = document.getElementById("instructions");
const btnX = document.getElementById("buttonX");
const btnO = document.getElementById("buttonO");
const tictacttoe = document.getElementById("tictactoe");
const end = document.getElementById("end");
const btnYes = document.getElementById("btnYes");
const resultMessage = document.getElementById("resultTitle");
const btnMode = document.getElementById("btnMode");
const allCases = document.querySelectorAll(".case");
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
let hardMode = false;
let playerSymbol;
let gameOn = false;
let computerMove;
// CONDITION TO WIN THE GAME
function checkWin(symbol) {
    return winCombos.some(combo =>{
        return combo.every(i => board[i] === symbol);
    });

}
function checkDraw() {
    const draw = board.every(entry => entry !== "");
    return draw;
}
/// FUNCTION TO GET A RANDOM MOVE AMONG THE EMPTY CASES
// CHECKING WHAT ARE THE EMPTY CASES AVAILABLE FOR A MOVE
// USING INDEX TO CHECK THE EMPTY ONE
function getRandomMove() {
        const boardEmpty = board
        .map((value, index) =>{
            if (value === "") {
                return index
            }else{
                return null
            }
        })
        .filter(index =>{
            return index !== null
        }); // EX boardEmpty = ["0", "2", "3", "6", "8"]
    // USING RANDOMIZATION TO CHOOSE AMONG THE INDEX
        const randomIndex = Math.floor(Math.random() * boardEmpty.length);
    // RETURNNING THE RANDOM MOVE AMONG THE EMPTY CASES
        return boardEmpty[randomIndex];
    };

// SWITCH TO HARD MODE BUTTON CLICK
btnMode.addEventListener("click", ev => {
    ev.preventDefault();
    hardMode = !hardMode;
    btnMode.classList.toggle("enabled");
    if (hardMode === true) {
        btnMode.textContent = "Difficulty enabled";
    } else {
        btnMode.textContent = "Enable difficulty";
    }
});
// CHOOSE SYMBOL X BUTTON
btnX.addEventListener("click", ev =>{
    ev.preventDefault();
    playerSymbol = "X";
    gameOn = true;
    instructions.style.display = "none";
});
// CHOOSE SYMBOL O BUTTON
btnO.addEventListener("click", ev =>{
    ev.preventDefault();
    playerSymbol = "O";
    gameOn = true;
    instructions.style.display = "none";
});
// THE GAME'S "POSITIONS MEMORY" HAS TO BE STORED IN A ARRAY
const board = ["","","","","","","","",""];

// CLICK ON THE BOARD DURING THE GAME
tictacttoe.addEventListener("click", ev => {
    ev.preventDefault();
    let computerSymbol;
    const caseClicked = ev.target;

// CONDITION TO CONSIDER THE CLICK
    if (gameOn === false || !caseClicked.classList.contains("case") || caseClicked.textContent !== "") {
        return;
    }else{
        caseClicked.textContent = playerSymbol;
        if (playerSymbol === "O") {
            computerSymbol = "X"
        }else{
            computerSymbol = "O"
        };
    };
// UPDATING THE POSITION'S MEMORY
    const index = Number(caseClicked.id) - 1;
    board[index] = playerSymbol;


// CHECKING IF THE CLICK GIVES A WON
    if (checkWin(playerSymbol)) {
        resultMessage.textContent = "YOU WON !!! CONGRATULATIONS!";
        end.style.display = "flex";
        gameOn = false;
        return;  
    };
// CHECKING IF THE CLICK GIVES A DRAW
    if (checkDraw()) {
        resultMessage.textContent = "IT'S A DRAW !!! TRY AGAIN!";
        end.style.display = "flex";
        gameOn = false;
        return;  
    };

    // COMPUTER MOVE
    // HARD MODE EXECUTION PRIORITY MOVE IF HARD MODE: ON

    if (hardMode === true) {
// CHEKING IF THERE IS A COMBO WITH 2 SYMBOLS AND 1 EMPTY CASE TO WIN
        const findIfJustoneMissing = winCombos.find(combo =>{
            const values = combo.map(index => board[index]);
            const symbolCount = values.filter(entry => entry === playerSymbol).length;
            const emptyCount = values.filter(entry => entry === "").length;
            return symbolCount === 2 && emptyCount === 1;
        })
        if (findIfJustoneMissing) {
            computerMove = findIfJustoneMissing.find(index =>{
                return board[index]=== "";
            })
        }else{
            computerMove = getRandomMove();
        }
    }else{
        computerMove = getRandomMove();
    }
        

// UPDATING THE GAME'S MEMORY
    board[computerMove] = computerSymbol;

// APPLYING THE MOVE TO FRONT END, USING COMPUTER MOVE TO GET THE DIV
    const computerCase = document.getElementById(String(computerMove + 1));
    computerCase.textContent = computerSymbol;

// CHECKING IF COMPUTER WON
    if (checkWin(computerSymbol)) {
        resultMessage.textContent = "YOU LOST !!! MAYBE NEXT TIME?!";
        end.style.display = "flex";
        gameOn = false;
        return;
    };
// CHECKING IF THE CLICK GIVES A DRAW
    if (checkDraw()) {
        resultMessage.textContent = "IT'S A DRAW !!! TRY AGAIN!";
        end.style.display = "flex";
        gameOn = false;
        return;  
    };
});
// REPLAY THE GAME BUTTON
btnYes.addEventListener("click", ev => {
    ev.preventDefault();
    // EMPTY THE FRONT END BOARD
    allCases.forEach(oneCase =>{
        oneCase.textContent = "";
    });
    // EMPTY THE GAME'S MEMORY
    board.forEach((entry, index) =>{
        board[index] = "";
    });
    // END PANEL DISAPEAR AFTER THE CLICK
    end.style.display = "none";
    // INSTRUCTION (START) GAME APPEAR
    instructions.style.display = "flex";
    // RESET PLAYER SYMBOL TO EMPTY AND GAME STATUS TO OFF 
    playerSymbol = "";
    gameOn = false;
});
