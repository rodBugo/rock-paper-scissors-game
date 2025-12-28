/* Initialize score */
let humanScore = 0;
let computerScore = 0;


/* DOM Elements */
const resultDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const buttons = document.getElementById("button");


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


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
        return;
    } 
    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") 
    ) {
        humanScore++;
        resultDiv.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
        return;
    }
    else {
        computerScore++
        resultDiv.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }

    updateScore();
    checkWinner();
}


/* This function updates the score */
function updateScore() {
    scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
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