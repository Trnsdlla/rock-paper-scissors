const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener("click", function() {
    if (playerScore < 5 && computerScore < 5) {
        const result = playRound("rock", getComputerChoice());
        document.getElementById("results").textContent = `${result}\nPlayer Score: ${playerScore} ; Computer Score: ${computerScore}`;
        checkGameEnd();
    }
});
paperBtn.addEventListener("click", function() {
    if (playerScore < 5 && computerScore < 5) {
        const result = playRound("paper", getComputerChoice());
        document.getElementById("results").textContent = `${result}\nPlayer Score: ${playerScore} ; Computer Score: ${computerScore}`;
        checkGameEnd();
    }
});
scissorsBtn.addEventListener("click", function () {
    if (playerScore < 5 && computerScore < 5) {
        const result = playRound("scissors", getComputerChoice());
        document.getElementById("results").textContent = `${result}\nPlayer Score: ${playerScore} ; Computer Score: ${computerScore}`;
        checkGameEnd();
    }
});

function checkGameEnd() {
    if (playerScore === 5 || computerScore === 5) {
        let finalMessage = "Game Over. ";
        finalMessage += playerScore === 5 ? "You win!" : "Computer Wins!";
        document.getElementById("results").textContent += `\n${finalMessage}`;
        disableButtons();
    }
};

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}