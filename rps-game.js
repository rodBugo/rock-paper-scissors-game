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



/* This function will play the game for five rounds. */
function playGame() {
    /* Initialize score */
    let humanScore = 0;
    let computerScore = 0;

    /* This function will play a single round of rock, paper, scissors. */
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! both choose ${humanChoice}`);
            console.log(humanScore, computerScore);
            return;
        } 

        if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper") 
        ) {
            humanScore++;
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
            console.log(humanScore, computerScore);
            return;
        }
        else {
            computerScore++
            console.log(`You lost this round! ${computerChoice} beats ${humanChoice}`);
            console.log(humanScore, computerScore);
        }
    }

    /* Play five rounds */
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    /* This if/else will display if the user won the game or lost the game. */
    if (humanScore > computerScore) {
        console.log(`You won! Congratulations!!!`);
        return;
    } else if (computerScore > humanScore) {
        console.log(`You lost! You'll beat them next time.`);
    } else {
        console.log(`It's a tie! No one wins.`);
    }
}

playGame();