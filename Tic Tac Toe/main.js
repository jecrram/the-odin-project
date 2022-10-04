const gameBtns = document.querySelectorAll(".gameboard__btn");
const restartBtn = document.querySelector("#restart-btn");
const statusText = document.querySelector(".section__status")

const player = (name, marker, turn) => {
  name = name;
  marker = marker;
  turn = turn;

  return { name, marker, turn };
};

const playerOne = player("Jericho", "fa-x", true);
const playerTwo = player("Eriz", "fa-o", false);

const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""]
  let gameRunning = false;
  let currentPlayer = playerOne;
  let currentPlayerMarker = playerOne.marker;

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const initializeGame = () => {
    gameRunning = true;

    gameBtns.forEach((gameBtn) => {
      gameBtn.addEventListener("click", cellClicked);
    });

    restartBtn.addEventListener('click', restartGame);
  }

  console.log(checkWinner())

  initializeGame();

  function cellClicked() {
    const cellIndex = this.getAttribute("data-index");

    if (board[cellIndex] != "" || !gameRunning) {
      return;
    }

    updateCell(this, cellIndex);
  }

  function updateCell(el, ind) {
    board[ind] = currentPlayerMarker;
    el.classList.add(currentPlayerMarker);
    changePlayer()
    checkWinner()

  }

  function restartGame() {

  }

  function changePlayer() {
    currentPlayerMarker = (currentPlayerMarker === 'fa-x') ? 'fa-o' : 'fa-x';
    currentPlayer = (currentPlayerMarker === 'fa-x') ? playerOne : playerTwo;
    statusText.textContent = `${currentPlayer.name}'s Turn`
  }

  function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winPatterns.length; i++) {
      const winCondition = winPatterns[i]; //[2,4,6]
      const cellA = board[winCondition[0]]; // will check board[2]
      const cellB = board[winCondition[1]]; // will check board[4]
      const cellC = board[winCondition[2]]; // will check board[6]
      console.log(cellA, cellB, cellC)

      if (cellA == "" || cellB == "" || cellC == "") {
        continue; //skips the iteration
      }

      if (cellA == cellB && cellB == cellC) {
        console.log(cellA == cellB && cellB == cellC);
        roundWon = true;
        break; //breaks the entire for loop
      }
    }

    if (roundWon) {
      statusText.textContent = `${currentPlayer.name} wins!`;
      gameRunning = false;
    } else if (!board.includes("")) {
      statusText.textContent = `Draw!`;
      gameRunning = false;
    }
  }

})()
