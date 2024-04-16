let playerScore = 0;
let computerScore = 0;

function randomNumber() {
    return Math.floor(Math.random() * 3)
}

function getComputerChoice() {
    const choice = randomNumber();
    
    switch (choice) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
        default: 
            return "Computer Error";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Its a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    };
}