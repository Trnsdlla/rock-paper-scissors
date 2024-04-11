let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function randomNumber() {
    return Math.floor(Math.random() * 3)
}

function getComputerChoice() {
    const choice = randomNumber();
    
    switch (choice) {
        case 0:
            return "Rock";
        case 1: 
            return "Paper";
        case 2: 
            return "Scissors";
        default: 
            return "Computer Error";
    }
}

function playRound(playerSelection, computerSelection) {
    if (!playerSelection) {
        return "Game cancelled";
    }

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        playerScore++;
        return "You win!";
    } else if ((playerSelection === "scissors" && computerSelection === "rock") ||
               (playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissors")) {
                computerScore++;
                return "Computer wins!"
    } else if (playerSelection === computerSelection) {
        return "Its a tie!";
    } else {
        return "Invalid Selection";
    }
}

function playGame() {

        const playerSelection = prompt("Enter rock, paper, or scissors.");

        if(playerSelection === null) {
            console.log("Game canceled by the player.");
            return;
        }

        if (playerSelection && (playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' || playerSelection.toLowerCase() === 'scissors')) {
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

            alert("Player Score: " + playerScore + "\nComputer Score: " + computerScore + "\nResult: " + result);

            roundsPlayed++;
        } else {
            alert("Invalid selection. Please enter 'rock', 'paper', or 'scissors'.");
        }
        console.log("Player Score:", playerScore);
        console.log("Computer Score:", computerScore);

        playGame();
    }

playGame();