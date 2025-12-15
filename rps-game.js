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

