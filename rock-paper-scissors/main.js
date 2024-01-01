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

    checkGameStatus(playerHand, computerHand);
  });
});

function updateScore(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    // console.log("It's a tie");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    // console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
  } else {
    computerScore++;
    // console.log(`You lose! ${computerChoice} beats ${playerChoice}!`);
  }
}

function checkGameStatus(playerHand, computerHand) {
  if (playerScore !== 3 && computerScore !== 3) {
    updateScore(playerHand, computerHand);
  } else {
    if (playerScore > computerScore) {
      console.log("You Win!");
    } else {
      console.log("You Lose!");
    }
  }
}
