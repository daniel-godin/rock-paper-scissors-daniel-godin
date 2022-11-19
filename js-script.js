// Original Assignment:  https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment
// UI Assignment:  https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#assignment

let headerContainer = document.getElementById('headerContainer');

let titleContainer = document.getElementById('titleContainer');

let roundsWonContainer = document.getElementById('roundsWonContainer');
let roundsWonHeadlineContainer = document.getElementById('roundsWonHeadlineContainer');
let displayRoundsWonContainer = document.getElementById('displayRoundsWonContainer');

let roundsWonHeadline = document.getElementById('roundsWonHeadline');
let playerGamesWonHeadline = document.getElementById('playerGamesWonHeadline');

let computerGamesWonHeadline = document.getElementById('computerGamesWonHeadline');



let playerGamesWon = document.getElementById('playerGamesWon');
let computerGamesWon = document.getElementById('computerGamesWon');
let box = document.getElementsByClassName('box');





const btn = document.querySelectorAll('button');
let gameResult = document.getElementById('gameResult');
let gameScore = document.getElementById('gameScore');
let playerRoundScore = document.getElementById('playerRoundScore');
let computerRoundScore = document.getElementById('computerRoundScore');

let displayPlayerChoice = document.getElementById('displayPlayerChoice');
let displayComputerChoice = document.getElementById('displayComputerChoice');

let roundWinner = document.getElementById('roundWinner');


displayPlayerChoice.innerText = "Choose Rock, Paper, or Scissors";
displayComputerChoice.innerText = "Waiting For You To Choose";

playerRoundScore.innerText = "0";
computerRoundScore.innerText = "0";

// playerGamesWon.innerText = "0";
// computerGamesWon.innerText = "0";

let playerRoundsWon = 0;
let computerRoundsWon = 0;

let numberOfPlayerWins = 0;
let numberOfComputerWins = 0;

function changeHeaderOnClick() {
    playerGamesWon.innerText = playerRoundsWon;
    computerGamesWon.innerText = computerRoundsWon;

    roundsWonHeadline.innerText = "Rounds Won:";
    playerGamesWonHeadline.innerText = "Player:";
    computerGamesWonHeadline.innerText = "Computer:";

    titleContainer.style.cssText = 'display: flex; flex-flow: column nowrap; border: 1px solid blue; justify-content: center; align-items: center; flex: 2';

    roundsWonContainer.style.cssText = 'display: flex; justify-content: center; align-items: center; width: 100%; flex: 1';

    roundsWonHeadlineContainer.style.cssText = '';

    displayRoundsWonContainer.style.cssText = 'display: flex; flex-flow: row nowrap; border: 1 solid black; justify-content: space-evenly; width: 100%;';

    for (i = 0; i < box.length; i++) {
        box[i].style.cssText = 'display: flex; flex-flow: column nowrap; justify-content: center; align-items: center;';
    }



}


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

        changeHeaderOnClick();

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