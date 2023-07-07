/*
PSEUDO CODE
Game starts with computer selecting a choice from array of rock, scissors, papers
*/

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let random = Math.random();

  return choices[Math.floor(random * 3)];
}

function playRound(playerSelection, computerSelection) {
  let computerHand = computerSelection();
  let playerHand = playerSelection;

  if (computerHand === "rock" && playerHand === "rock") {
    console.log("Tie");
  } else if (computerHand === "rock" && playerHand === "paper") {
    console.log("Computer wins");
  } else if (computerHand === "rock" && playerHand === "scissors") {
    console.log("Player wins");
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

// function game() {}

playRound(playerSelection, computerSelection);
