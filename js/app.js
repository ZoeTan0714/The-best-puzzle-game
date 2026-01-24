/*-------------------------------- Constants --------------------------------*/
const startButton = document.getElementById('start')
const difficultySelected = document.getElementById('difficulty')
const newButton = document.getElementById('new')

/*---------------------------- Variables (state) ----------------------------*/
let pieceNumber;
let timeLeft;
let gameActive = false;
let correctPiece;

/*------------------------ Cached Element References ------------------------*/
const difficultyMap = {
    easy: 4,
    medium: 9,
    hard: 12
};


/*-------------------------------- Functions --------------------------------*/
startButton.addEventListener("click",() => {
    const difficulty = difficultySelected.ariaValueMax;

    if (!difficulty) {
        alert('Please select a difficulty level to start');
        return;
    }
    resetGame();
    pieceNumber - difficultyMap[difficulty];
    gameActive = true;
    createPuzzle(pieceNumber);
    startTimer();
});

newButton.addEventListener("click",()=> {
    resetGame();
});


function resetGame () {
    //to reset the timer 
}

function createPuzzle(count) {
    //to split, dra drop events, decide the correct place, fixed 
    correctPiece = 0;

    for (let i = 0; i < count; i++) {
        const piece = document.createElement ("div");
        piece.classList.add("piece")
        piece.dataset.index = i;
        piece.style.left = Math.random() * 300 + "px";
        piece.style.top = Math.random() * 300 + "px";
        makeDraggable(piece);
        puzzleArea.appendChild(piece);
};

function makeDraggable (piece) {
    let offsetX = 0;
    let offsetY = 0;

    piece.addEventListener ("mousedown", (event) => {
        if (!gameActive) return;

        offsetX = event.offsetX;
        offsetY = event.offsetY;

        document.onmousemove = (moveEvent) => {
            piece.style.left = moveEvent.pageX - offsetX + "px";
            piece.style.right = moveEvent.pageY - offsetY + "px";
        };

        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
            checkPosition(piece);
        };
    });
 }


 function startTimer() {
    //to start the timer

function checkPosition (piece) {
    const index = piece.dataset.index;
    
    }
}



/*----------------------------- Event Listeners -----------------------------*/








