'use strict';

const buttons = document.querySelectorAll('.button');
const resultsDisplay = document.querySelector('.results');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resetBtn = document.querySelector('.reset');

const rockBtn = document.querySelector('#Rock');
const paperBtn = document.querySelector('#Paper');
const scissorsBtn = document.querySelector('#Scissors');

// sounds
const belch = new Audio('sounds/belch.wav');
const lose = new Audio('sounds/die.wav');
const bell = new Audio('sounds/bell.wav');
const win = new Audio('sounds/wingame.wav');
const tie = new Audio('sounds/dodge.wav');

let playerScore = 0;
let computerScore = 0;

resetBtn.addEventListener('click', function () {
    resultsDisplay.textContent = 'Make a selection to begin'
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = ` 0`;
    computerScoreDisplay.textContent = ` 0`;
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
    bell.currentTime = 0;
    bell.play();
    resultsDisplay.textContent = `You win! ${player} beats ${computerSelect}.`; 
    return 'win';
} else if (player === 'Rock' && computerSelect === 'Paper' || player === 'Paper' && computerSelect === 'Scissors' || player === 'Scissors' && computerSelect === 'Rock') {
    belch.currentTime = 0;
    belch.play();
    resultsDisplay.textContent = `You lose! ${player} loses to ${computerSelect}.`; 
    return 'lose';
} else {
    tie.currentTime = 0;
    tie.play();
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
                    playerScoreDisplay.textContent = ` ${playerScore}`;
                    if (playerScore === 5) {
                        win.currentTime = 0;
                        win.play();
                        disableButtons();
                        resultsDisplay.textContent = `${playerChoice} beats ${computerChoice}, you WIN the game!!!`;        
                        }  
                } else if (result === 'lose') {
                    computerScore++;
                    computerScoreDisplay.textContent = ` ${computerScore}`;
                    if (computerScore === 5) {
                        lose.currentTime = 0;
                        lose.play();
                        disableButtons();
                        resultsDisplay.textContent = `${playerChoice} loses to ${computerChoice}, you LOSE the game!!!`; 
                    }
                    
                    
                }
    
        })}}

play();