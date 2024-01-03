let playerBtns = document.querySelectorAll(".player-hand");
let playerScore = 0,
  computerScore = 0;

function getComputerHand() {
  let handList = ["rock", "paper", "scissors"];

  let itemNumber = Math.floor(Math.random() * handList.length);

  return handList[itemNumber];
}

function getPlayerHand(hand) {
  return hand.target.innerText;
}

playerBtns.forEach((playerBtn) => {
  playerBtn.addEventListener("click", (e) => {
    let playerHand;
    let computerHand;

    computerHand = getComputerHand().toLowerCase();
    playerHand = getPlayerHand(e).toLowerCase();

    checkRoundWinner(playerHand, computerHand);
  });
});

function updateScore(playerChoice, computerChoice) {
  let playerScoreUI = document.querySelector(`.player-score`);
  let compScoreUI = document.querySelector(".computer-score");

  let handsUI = document.querySelector(".hand-container");
  let div1 = document.createElement("div");
  div1.innerText = playerChoice;

  let div2 = document.createElement("div");
  div2.innerText = computerChoice;

  handsUI.appendChild(div1);
  handsUI.appendChild(div2);

  if (playerChoice === computerChoice) {
    // console.log("It's a tie");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    playerScoreUI.innerText = playerScore;

    // console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
  } else {
    computerScore++;
    compScoreUI.innerText = computerScore;
    // console.log(`You lose! ${computerChoice} beats ${playerChoice}!`);
  }
}

function checkRoundWinner(playerHand, computerHand) {
  let winnerUI = document.querySelector(".winner-text");

  if (playerScore !== 3 && computerScore !== 3) {
    updateScore(playerHand, computerHand);
  } else {
    if (playerScore > computerScore) {
      winnerUI.innerText = "Player Wins";
    } else {
      winnerUI.innerText = "Comp Wins";
    }
  }
}
