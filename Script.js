// const gameContainer = document.querySelector("#gameContainer");
const cell = document.querySelectorAll(".cell");
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector(".restartBtn");

const winCodition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";

let arr = ["", "", "", "", "", "", "", "", ""];
let running = false;

initlizeGame();
function initlizeGame() {
  cell.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function cellClicked() {
  const id = this.getAttribute("id");
  // console.log(arr.indexOf(id));
  if (arr[id] != "" || !running) {
    return;
  }
  updateCell(this, id);
  checkWinner();
}

function updateCell(cell, id) {
  arr[id] = currentPlayer;
  cell.textContent = currentPlayer;
  // changePlayer();
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winCodition.length; i++) {
    // console.log(i)
    const condition = winCodition[i];
    // console.log(condition)
    const cellA = arr[condition[0]];
    const cellB = arr[condition[1]];
    const cellC = arr[condition[2]];
    // console.log(cellC)
    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer}'s Wins`;
    
    running = false;
  } else if (!arr.includes("")) {
    statusText.textContent = "Draw";
    running = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  currentPlayer = "X";
  arr = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s trun`;
  cell.forEach((cell) => (cell.textContent = ""));
  running = true;

}

// function handelClick(element) {
//   const id = Number(element.id);
//   arr[id] = currentPlayer;
//   element.innerText = currentPlayer;
//   currentPlayer = currentPlayer === "x" ? "0" : "x";
// }

// console.log(gameContainer)
// console.log(gridContainer)

// function handelClick() {
//     gridContainer
// }
