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

/* This function gets the user's choice from a prompt. */
function getHumanChoice() {
    let userChoice = prompt("Enter a choice: (Rock, Paper, Scissors).");

    if (userChoice === "Rock" || userChoice === "rock") {
        return "Rock";
    } else if (userChoice === "Paper" || userChoice === "paper") {
        return "Paper";
    } else if (userChoice === "Scissors" || userChoice === "scissors") {
        return "Scissors";
    } else {
        return "Invalid choice."
    }
}

