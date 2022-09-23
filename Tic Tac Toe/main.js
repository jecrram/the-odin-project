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
})();

const displayController = (() => {
  const markTheSpot = (e) => {
    if (playerOne.playerTurn) {
      e.target.classList.add(`${playerOne.marker}`, `fa-solid`);
      playerOne.playerTurn = false;
      playerTwo.playerTurn = true;
      playerOne.score.push(e.target.attributes["data-spot"].value);
      // console.log(board.indexOf(e.target.attributes["data-spot"].value));
      // console.log(playerOne.score);
      // console.dir(e.target.attributes["data-spot"].value);
      // console.log(playerOne.score.push(e.target.classList));
    } else {
      e.target.classList.add(`${playerTwo.marker}`, `fa-solid`);
      playerOne.playerTurn = true;
      playerTwo.playerTurn = false;
    }
  };

  return { markTheSpot };
})();

gameBtns.forEach((gameBtn) => {
  gameBtn.addEventListener("click", displayController.markTheSpot);
});
