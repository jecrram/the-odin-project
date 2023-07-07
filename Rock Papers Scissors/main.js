/*
PSEUDO CODE
Computer selects hand
Player selects hand
if playerhand === pchand, then tie
if player selects rock and pc selects scissors, then win
if player selects rock and pc selects paper, then lose
if player selects paper and pc selects scissors, then lose
if player selects paper and pc selects rock, then win
if player selects scissors and pc selects paper, then win
if player selects scissors and pc selects rock, then lose
*/

let choices = ["rock", "paper", "scissors"];
let gameCount = 0;

function getComputerChoice() {
  let random = Math.random();

  return choices[Math.floor(random * 3)];
}

function playRound(playerSelection, computerSelection) {
  //make sure that hands can be strictly checked with array
  let playerHand = playerSelection.toLowerCase();
  let computerHand = computerSelection.toLowerCase();
  //when both players have same hand
  if (playerHand === computerHand) {
    return "It's a tie!";
  } else if (
    //conditions for player to win
    (playerHand === "rock" && computerHand === "scissors") ||
    (playerHand === "paper" && computerHand === "rock") ||
    (playerHand === "scissors" && computerHand === "paper")
  ) {
    return "You win!";
  } else {
    //if not a winner, then you're a loser
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let gameNumber = 1; gameNumber <= 5; gameNumber++) {
    gameCount++;
    //sets player and computer hands
    let playerSelection = prompt("What are you playing?");

    let computerSelection = getComputerChoice();

    console.log(playerSelection, computerSelection, gameNumber);

    if (gameNumber <= 5) {
      return playRound(playerSelection, computerSelection);
    } else {
      return "Stop playing! You exceeded 5 games";
    }
  }
}

game();
