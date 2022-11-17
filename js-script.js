// Original Assignment:  https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment
// UI Assignment:  https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#assignment

const btn = document.querySelectorAll('button');
let gameResult = document.getElementById('gameResult');
let gameScore = document.getElementById('gameScore');
let playerRoundScore = document.getElementById('playerRoundScore');
let computerRoundScore = document.getElementById('computerRoundScore');

let displayPlayerChoice = document.getElementById('displayPlayerChoice');
let displayComputerChoice = document.getElementById('displayComputerChoice');

let roundWinner = document.getElementById('roundWinner');

let playerGamesWon = document.getElementById('playerGamesWon');
let computerGamesWon = document.getElementById('computerGamesWon');

let numberOfPlayerWins = 0;
let numberOfComputerWins = 0;

let playerRoundsWon = 0;
let computerRoundsWon = 0;


// Function to randomly return either 'Rock', 'Paper', or 'Scissors' for Computer Selection.
function getComputerChoice() {
    let gameArray = ['Rock', 'Paper', 'Scissors'];  
    return gameArray[Math.floor((Math.random() * gameArray.length))];
}
// Function that takes player selection and computer selection parameters.  Compares them for winner and then outputs a string, as well as adding to the score.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
            ++numberOfPlayerWins;
            return gameResult.textContent = `You Win, ${playerSelection} beats ${computerSelection}.`;
        } else if (playerSelection === computerSelection) {
            return gameResult.textContent = `You Tied! You Both Chose ${playerSelection}.`;
        } else {
            ++numberOfComputerWins;
            return gameResult.textContent = `You Lose, ${computerSelection} beats ${playerSelection}.`;
    }   
}

// Each time a button is clicked, the value of that click is stored in playerSelection (Rock, Paper, Scissors).
btn.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerSelection = getComputerChoice();

        displayPlayerChoice.innerText = playerSelection;
        displayComputerChoice.innerText = computerSelection;

        playRound(playerSelection, computerSelection); // invokes playRound function

        playerRoundScore.innerText = numberOfPlayerWins;
        computerRoundScore.innerText = numberOfComputerWins;

        playerGamesWon.innerText = playerRoundsWon;
        computerGamesWon.innerText = computerRoundsWon;

        // Testing:  Create a function and function call to do what your if(===5) does.  Clean up the code.
        checkScoreFunction(numberOfPlayerWins, numberOfComputerWins);

    });   
});

function checkScoreFunction(numberOfPlayerWins, numberOfComputerWins) {
    if (numberOfPlayerWins === 5) {
        resetRoundScore();
        ++playerRoundsWon;
        playerGamesWon.innerText = playerRoundsWon;
        computerGamesWon.innerText = computerRoundsWon;
        return roundWinner.innerText = "YOU WON THE ROUND!";
    } else if (numberOfComputerWins === 5) {
        resetRoundScore();
        ++computerRoundsWon;
        playerGamesWon.innerText = playerRoundsWon;
        computerGamesWon.innerText = computerRoundsWon;
        return roundWinner.innerText = "You lost the round.  Computer Wins!";
    } else if (numberOfPlayerWins > numberOfComputerWins) {
        return roundWinner.innerText = "You're Winning.  Keep Going!";
    } else if (numberOfComputerWins > numberOfPlayerWins) {
        return roundWinner.innerText = "You're Losing!  Don't let them win!";
    } else if (numberOfPlayerWins === numberOfComputerWins) {
        return roundWinner.innerText = "You're Tied!"; 
    } else {
        return roundWinner.innerText = "Keep Playing";
    }
}

function resetRoundScore() {
    numberOfPlayerWins = numberOfComputerWins = 0;
    playerRoundScore.innerText = "0";
    computerRoundScore.innerText = "0";
}