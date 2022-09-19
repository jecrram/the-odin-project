const gameBtns = document.querySelectorAll(".gameboard__btn");

const Player = (name, marker) => {
  let score = [];
  marker = marker;

  const addToScoreArray = (e) => {
    e.target.classList.add(`${marker}`, `fa-solid`);
  };

  return { name, marker, addToScoreArray };
};

const playerOne = Player("Jericho", "fa-x");
const playerTwo = Player("Eriz", "fa-o");

const Gameboard = () => {
  let gameArray = [];

  const checkWhosTurn = () => {
    if (!gameArray) {
    }
  };

  return { checkWhosTurn };
};

const ticTacToe = Gameboard("Tictactoe");

ticTacToe.checkWhosTurn();

// function checkWhosTurn() {
//   let gameArray = [];

//   gameArray.push();
// }

gameBtns.forEach((gameBtn) => {
  gameBtn.addEventListener("click", playerOne.addToScoreArray);
});
