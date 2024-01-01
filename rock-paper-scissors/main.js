let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];

  let rand = Math.random();

  return choices[Math.floor(rand * choices.length)];
}

function countScore(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }

  console.log(playerScore, computerScore);
}

function playRound(playerSelection, computerSelection) {
  let playerHand = playerSelection.toLowerCase();
  let computerHand = computerSelection.toLowerCase();
  let winner;

  playerOutput = playerHand.charAt(0).toUpperCase() + playerHand.slice(1);
  computerOutput = computerHand.charAt(0).toUpperCase() + computerHand.slice(1);

  if (playerHand === computerHand) {
    winner = `tie`;
    console.log("It's a tie!");
  } else if (
    (playerHand === "rock" && computerHand === "scissors") ||
    (playerHand === "paper" && computerHand === "rock") ||
    (playerHand === "scissors" && computerHand === "paper")
  ) {
    winner = `player`;
    console.log(`You win! ${playerOutput} beats ${computerOutput}!`);
  } else {
    winner = `computer`;
    console.log(`You lose! ${computerOutput} beats ${playerOutput}!`);
  }

  countScore(winner);
}

function game() {
  while (playerScore !== 3 && computerScore !== 3) {
    // let playerSelection = prompt("What are you playing?");
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
  }

  console.log(`Final Score: ${playerScore} - ${computerScore}`);
}

console.log(game());
