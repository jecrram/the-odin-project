const gameBtns = document.querySelectorAll(".gameboard__btn");

// let playerOne = [];
// let playerTwo = [];

const Player = (name) => {
  //   let score = [];
  //   const addToScoreArray = () => {};
  //   return { name };
};

const playerOne = Player("Jericho");
const playerTwo = Player("Eriz");

// const Gameboard = () => {

//     const displayToGameboard
// };

gameBtns.forEach((gameBtn) => {
  gameBtn.addEventListener("click", function (e) {
    e.target.classList.add("fa-solid", "fa-x");
    e.target.classList.add("fa-solid", "fa-o");
  });
});
