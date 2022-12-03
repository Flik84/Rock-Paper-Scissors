'use strict';

const buttons = document.querySelectorAll('.button');
const resultsDisplay = document.querySelector('.results');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resetBtn = document.querySelector('.reset');

const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const scissorsBtn = document.querySelector('#Scissors');

let playerScore = 0;
let computerScore = 0;

resetBtn.addEventListener('click', function () {
    resultsDisplay.textContent = 'Make a selection to begin'
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    enableButtons();
})


// generates random number between 1 and 3 for computer choice (for use in game() function below)
const getComputerChoice = function () {
    const choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return 'Rock';
    } else if (choice === 2) {
        return 'Paper';
    } else return 'Scissors';
}

// plays a single round of game against computer (for use in game() function below)
const playRound = function (playerSelect, computerSelect) {
    const player = playerSelect;

if (player === 'Rock' && computerSelect === 'Scissors' || player === 'Paper' && computerSelect === 'Rock' || player === 'Scissors' && computerSelect === 'Paper') {
    resultsDisplay.textContent = `You win! ${player} beats ${computerSelect}.`; 
    return 'win';
} else if (player === 'Rock' && computerSelect === 'Paper' || player === 'Paper' && computerSelect === 'Scissors' || player === 'Scissors' && computerSelect === 'Rock') {
    resultsDisplay.textContent = `You lose! ${player} loses to ${computerSelect}.`; 
    return 'lose';
} else {
    resultsDisplay.textContent =`Draw! You both chose ${player}.`;
    return 'draw';
}
}

// makes buttons unclickable after winner declared
const disableButtons = function () {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

const enableButtons = function () {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

// allows player to play until player or computer reaches five wins and winner declared
const play = function () {
    for (const button of buttons) {
        button.addEventListener('click', function () {
            const computerChoice = getComputerChoice();
            const playerChoice = button.id;
            const result = playRound(playerChoice, computerChoice);
                if (result === 'win') {
                    playerScore++;
                    playerScoreDisplay.textContent = `Player: ${playerScore}`;
                    if (playerScore === 5) {
                        console.log(playerScore);
                        disableButtons();
                        resultsDisplay.textContent = `${playerChoice} beats ${computerChoice}, you WIN the game!!!`;        
                        }  
                } else if (result === 'lose') {
                    computerScore++;
                    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
                    if (computerScore === 5) {
                        console.log(computerScore);
                        disableButtons();
                        resultsDisplay.textContent = `${playerChoice} loses to ${computerChoice}, you LOSE the game!!!`; 
                    }
                    
                    
                }
    
        })}}

play();