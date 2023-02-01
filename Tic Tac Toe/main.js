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
  board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let winningPatterns = [
    [`1`, "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ];

  const checkWinner = () => {
    let playerWin;
    winningPatterns.forEach((pattern) => {
      pattern.every((num) => {
        console.log(pattern, num);
        // console.log(pattern);
        // console.log(playerWin, num, playerOne.score);
        // playerWin = playerOne.score.includes(num);
      });
    });
    return playerWin;
  };

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
