// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment
// Use browser console and type game() to start game.

// Function to randomly return either 'Rock', 'Paper', or 'Scissors' for Computer.
function getComputerChoice() {
    let gameArray = ['Rock', 'Paper', 'Scissors'];  
    return gameArray[Math.floor((Math.random() * gameArray.length))];
}

// Function to play Rock, Paper, Scissors 5 times.  Keep Track Of Number of Wins.  Display Number of Wins.  Use prompt() to get user input and verify it is one of the allowable answers.
function game() {

    let numberOfPlayerWins = 0;
    let numberOfComputerWins = 0;

    // Loop that runs the game for 5 rounds.
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(); // Assigning computerSelection variable to the return value of the getComputerChoice() function.
        let playerSelection = getPlayerChoice(); // Assigning playserSelection variable to the return value of the getPlayerChoice() function.

        playRound(playerSelection, computerSelection); // Calling the playRound() function.

        // Display in console.log the results of the playRound() function.  Winner and what Player and Computer chose.  Also adds 1 to tally for player or computer if they won.
        if (playRound(playerSelection, computerSelection) === `playerWinsRound`) {
            ++numberOfPlayerWins;
            console.log(`You won this round!  ${playerSelection} beats ${computerSelection}.  Score: Player: ${numberOfPlayerWins} vs. Computer: ${numberOfComputerWins}.`)
        } else if (playRound(playerSelection, computerSelection) === `tieRound`) {
            console.log(`You tied this round.  You both chose ${playerSelection}.  Score: Player: ${numberOfPlayerWins} vs. Computer: ${numberOfComputerWins}.`); 
        } else {
            ++numberOfComputerWins;
            console.log(`You lose this round.  ${computerSelection} beats ${playerSelection}.  Score: Player: ${numberOfPlayerWins} vs. Computer: ${numberOfComputerWins}.`);
        }
    }

    // Function that runs after the for loop completes its 5 loops.  Uses the updated variables numberOfPlayerWins and numberOfComputerWins to calculate a winner, then returns a string with the results.
    function checkScoreFunction(numberOfPlayerWins, numberOfComputerWins) {
        if (numberOfPlayerWins > numberOfComputerWins) {
            return `You win the game!  Player Score:${numberOfPlayerWins} vs. Computer Score:${numberOfComputerWins}.`;
        } else if (numberOfComputerWins > numberOfPlayerWins) {
            return `You lose the game.  Computer Score:${numberOfComputerWins} vs. Player Score:${numberOfPlayerWins}.`;
        } else {
            return `Tie Game!  Try Again!  Player Score:${numberOfPlayerWins} vs. Computer Score:${numberOfComputerWins}.`;
        }
    }

    // Console.log that displays the checkScoreFunction after the for loop runs and the function completes.
    console.log(checkScoreFunction(numberOfPlayerWins, numberOfComputerWins)); 
}

// Function to get a player choice between:  Rock, Paper, or Scissors.
// Function should use prompt() to get player choice.
// Function should be case-insensitive.  First, lowercase everything, then uppercase the first letter.
// Function should verify that player has written "rock, paper, or scissors" (case-insensitive).  If player has not, let player write in choice again.  Remind player to type carefully and that they have 3 chances to input their answer correctly.
function getPlayerChoice () {
    let playerSelection = prompt("Rock, Paper, or Scissors?", "").toLowerCase(); // Prompt to have player choose "Rock, Paper, or Scissors?", then lowercase answer.
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1); // Changing playerSelection variable to have the first letter be capitalized.

// Verification:  
// If player inputs "Rock, Paper, or Scissors" into the prompt(), then return that value.  That value then gets used in the game() and playRound() functins.
// If player does not spell "Rock, Paper, or Scissors" correctly, they should be prompted to input their choice again.  Remind player to verify their answer is spelled correctly.  Give player 3 chances before they lose the round.
    const acceptedAnswers = ["Rock", "Paper", "Scissors"]; // Array of "accepted" answers.  This array should only be called after player input is all lowercased and then first letter only is uppercased.

    if (acceptedAnswers.includes(playerSelection)) {
        return playerSelection;
    } else {
        // For loop that loops 3 times if the original prompt is not spelled correctly.  Each loop prompts a special message to check spelling.  Each loop checks if their new answer includes one of three allowable answers.  If it does not, the loop runs again.  If it does, it returns the value.  If loop runs 3 times, it returns an undefined (i think) answer, which will make the player lose the round.
        for (let i = 0; i < 3; i++) {
            let playerSelection = prompt("Incompatible Answer.  Check Your Spelling.  Would you like Rock, Paper, or Scissors?", "").toLowerCase();
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

                if (acceptedAnswers.includes(playerSelection)) {
                    return playerSelection;
            }
        }
    }
}

// Function to play a single round of the game Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
            return `playerWinsRound`;
    } else if (playerSelection === computerSelection) {
            return `tieRound`;
    } else {
            return `computerWinsRound`;
    }
}