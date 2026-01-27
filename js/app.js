/*-------------------------------- Constants --------------------------------*/
const startButton = document.getElementById('start')
const newButton = document.getElementById('new')

/*---------------------------- Variables (state) ----------------------------*/
let pieceNumber;
// let timeLeft;
let gameActive = false;
let correctPiece = 0;
let selectedPiece = null;

/*-------------------------------- Functions --------------------------------*/

// newButton.addEventListener("click",()=> {
//     resetGame();
// });

/*-----game area on the left (container // createPuzzle() // class = grid-item)-----*/
let row = 3;
let col = 3;
let piecesize = 80; 

const container = document.getElementById ("gamearea");
function createPuzzle (){
for (let i=0; i<row; i++) {
    for (let y=0; y<col; y++) {
        const slot = document.createElement("div");
        slot.className = "slot-item";
        slot.style.width = piecesize + "px";
        slot.style.height = piecesize + "px";

        const piece = document.createElement("div");
        piece.className = "grid-item";
        piece.style.backgroundImage = `url("https://tse3.mm.bing.net/th/id/OIP.6sS_JyB3SI4itv46sThLMQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3")`;
        piece.style.backgroundSize = `${col * piecesize}px ${row * piecesize}px` ;
        piece.style.width = piecesize + "px";
        piece.style.height = piecesize + "px";
        const a = y * piecesize;
        const b = i * piecesize;
        piece.style.backgroundPosition = `-${a}px -${b}px`;
        
        //Note: record each piece's correct place in game area 
        piece.dataset.correctRow = i;
        piece.dataset.correctCol = y;
        
        //Note: event listener & define the selected piece 
        piece.addEventListener("click", () => {
        // if (!Piece) return;            
        if (selectedPiece) {
            selectedPiece.classList.remove("selected")
        }
        selectedPiece = piece;
        piece.className = "selected";
    });
slot.appendChild(piece);
container.appendChild(slot)
        }      
    } 
}
createPuzzle();


/*-----empty area on the right(emptyContainer // createEmpty() // class = empty-item)-----*/
const emptyContainer = document.getElementById("emptyarea");
function createEmpty (){
for (let i=0; i<row; i++) {
    for (let y=0; y<col; y++) {
        const emptyPiece = document.createElement("div");
        emptyPiece.className = "empty-item";
        // emptyPiece.style.backgroundSize = `${col * piecesize}px ${row * piecesize}px` ;
        emptyPiece.style.width = piecesize + "px";
        emptyPiece.style.height = piecesize + "px";
        emptyContainer.appendChild(emptyPiece);
    
        //Note: this is to record position for each slot 
        emptyPiece.dataset.row = i;
        emptyPiece.dataset.col = y;
    
        //Note: add event lisener and check if correct 
        emptyPiece.addEventListener("click", ()=> {
            if (!selectedPiece) return;
            
            const theRow = selectedPiece.dataset.correctRow;
            const theCol = selectedPiece.dataset.correctCol;
            const targetRow = emptyPiece.dataset.row;
            const targetCol = emptyPiece.dataset.col;

            if (theRow === targetRow && theCol === targetCol) {
                emptyPiece.appendChild(selectedPiece);
                selectedPiece.classList.remove("selected");
                selectedPiece = null;

                correctPiece++;} else {
                message.textContent = "Try again!"
            }  
            
            if (correctPiece === row*col) {
                message.textContent = "You win!"
            }
        });
         emptyContainer.appendChild(emptyPiece);
    }}
};
createEmpty ()






function resetGame () {
        
}





// function makeDraggable (piece) {
//     let offsetX = 0;
//     let offsetY = 0;

//     piece.addEventListener ("mousedown", (event) => {
//         if (!gameActive) return;

//         offsetX = event.offsetX;
//         offsetY = event.offsetY;

//         document.onmousemove = (moveEvent) => {
//             piece.style.left = moveEvent.pageX - offsetX + "px";
//             piece.style.right = moveEvent.pageY - offsetY + "px";
//         };

//         document.onmouseup = () => {
//             document.onmouseup = null;
//             document.onmousemove = null;
//             checkPosition(piece);
//         };
//     });
//  }


// function startTimer() {
//     //to start the timer

