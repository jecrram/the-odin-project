const gameBtns = document.querySelectorAll(".gameboard__btn");

const player = (name, marker, playerTurn) => {
  name = name;
  marker = marker;
  playerTurn = playerTurn;
  let score = [];

  return { name, marker, playerTurn, score };
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

  return { checkWinner };
})();

gameBoard.checkWinner();

const displayController = (() => {
  const markTheSpot = (e) => {
    if (playerOne.playerTurn) {
      e.target.classList.add(`${playerOne.marker}`, `fa-solid`);
      playerOne.playerTurn = false;
      playerTwo.playerTurn = true;
      playerOne.score.push(e.target.attributes["data-spot"].value);
      // console.log(playerOne.score);
      // console.log(playerTwo.score);
    } else {
      e.target.classList.add(`${playerTwo.marker}`, `fa-solid`);
      playerOne.playerTurn = true;
      playerTwo.playerTurn = false;
      playerTwo.score.push(e.target.attributes["data-spot"].value);
      // console.log(playerOne.score);
      // console.log(playerTwo.score);
    }
  };

  return { markTheSpot };
})();

gameBtns.forEach((gameBtn) => {
  gameBtn.addEventListener("click", displayController.markTheSpot);
});
