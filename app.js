// Code Outline:
// 1. Randomize a number that goes up to 3
// 2. The randomized number will correspond to 1 of 3 possibilities: Rock, Paper, or Scissors
// 3. The possibilities will be assigned to the computerSelection, which will be random every time.
// 4. Contain first, the random computer selection inside of it's own function. Then make a function to play the actual game.
// 5. The game will contain two parameters: playerSelection (will be stored in a global variable) and computerSelection (will be stored in it's own function). The computerSelection() function will pass as the argument for the computerSelection parameter. And the playerSelection variable will be passed as the argument for the playerSelection parameter

// ----------------------------------

// Player selection:
const playerSelection = prompt("Enter your selection");

// Computer selection function
function computerSelection() {
  const randomize = Math.floor(Math.random() * 3);
  if (randomize === 0) {
    return "Rock";
  } else if (randomize === 1) {
    return "Paper";
  } else if (randomize === 2) {
    return "Scissors";
  }
}

// Round function
function playRound(playerSelection, compSelection) {
  if (
    (playerSelection === "Rock" && compSelection === "Scissors") ||
    (playerSelection === "Paper" && compSelection === "Rock") ||
    (playerSelection === "Scissors" && compSelection === "Paper")
  ) {
    return "Player wins!";
  } else if (
    (playerSelection === "Rock" && compSelection === "Rock") ||
    (playerSelection === "Paper" && compSelection === "Paper") ||
    (playerSelection === "Scissors" && compSelection === "Scissors")
  ) {
    return "Tie!";
  } else if (
    (compSelection === "Rock" && playerSelection === "Scissors") ||
    (compSelection === "Paper" && playerSelection === "Rock") ||
    (compSelection === "Scissors" && playerSelection === "Paper")
  ) {
    return "Computer wins!";
  }
}

// Game of 5
function game() {
  for (let i = 0; i <= 5; i++) {
    console.log(`Game ${i}:`);
    if (playRound(playerSelection, computerSelection()) === "Player wins!") {
      console.log("Player wins!");
    } else if (playRound(playerSelection, computerSelection()) === "Tie!") {
      console.log("Tie!");
    } else if (
      playRound(playerSelection, computerSelection()) === "Computer wins!"
    ) {
      console.log("Computer wins!");
    } else {
      console.log("No winners");
    }
  }
}
game();
