/* Initialize score and rounds*/
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let ties = 0;
const MAX_ROUNDS = 5;


/* DOM Elements */
const resultDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const buttons = document.querySelectorAll("button");


/* This function gets the computer's choice at random. */
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);

    if (cpuChoice === 0) {
        return "Rock";
    } else if (cpuChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


/* This function plays the game */
function playRound(humanChoice, computerChoice) {
    if (roundsPlayed >= MAX_ROUNDS) return;

    roundsPlayed++;

    if (humanChoice === computerChoice) {
        ties++;
        resultDiv.textContent =
            `Round ${roundsPlayed}: It's a tie! Both chose ${humanChoice}.`;
        updateScore();
        checkGameOver();
        return;
    }

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        resultDiv.textContent =
            `Round ${roundsPlayed}: You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultDiv.textContent =
            `Round ${roundsPlayed}: You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    updateScore();
    checkGameOver();
}


/* This function updates the score */
function updateScore() {
    scoreDiv.textContent =
        `Rounds: ${roundsPlayed}/${MAX_ROUNDS} | ` +
        `Player: ${humanScore} | Computer: ${computerScore} | Ties: ${ties}`;
}


/* This function will check for winner */
function checkWinner() {
    if (humanScore === 5) {
        resultDiv.textContent = "You won the game!";
    }

    if (computerScore === 5) {
        resultDiv.textContent = "You lost the game!";
    }
}


/* This function will disable buttons */
function disableButtons() {
    buttons.forEach(button => {
        button.disable = true;
    });
}


/* This function is for button event listeners */
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});


/* This function ends the game and displays results */
function checkGameOver() {
    if (roundsPlayed === MAX_ROUNDS) {
        if (humanScore > computerScore) {
            resultDiv.textContent +=
                ` 🎉 You won the game! (Ties: ${ties})`;
        } else if (computerScore > humanScore) {
            resultDiv.textContent +=
                ` 💀 You lost the game! (Ties: ${ties})`;
        } else {
            resultDiv.textContent +=
                ` 🤝 It's a tie game! (Ties: ${ties})`;
        }

        disableButtons();
    }
}


/* Initial score display */
updateScore();