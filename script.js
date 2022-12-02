const buttons = document.querySelectorAll('.button');
const resultsDisplay = document.querySelector('.results');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const startBtn = document.querySelector('.start-btn');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');


// generates random number between 1 and 3 for computer choice (for use in game() function below)
const getComputerChoice = function () {
    const choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else return 'scissors';
}

// plays a single round of game against computer (for use in game() function below)
const playRound = function (playerSelect, computerSelect) {
    const player = playerSelect.toLowerCase();

if (player === 'rock' && computerSelect === 'scissors' || player === 'paper' && computerSelect === 'rock' || player === 'scissors' && computerSelect === 'paper') {
    resultsDisplay.textContent = `You win! ${player} beats ${computerSelect}`; 
    return 'win';
} else if (player === 'rock' && computerSelect === 'paper' || player === 'paper' && computerSelect === 'scissors' || player === 'scissors' && computerSelect === 'rock') {
    resultsDisplay.textContent = `You lose! ${computerSelect} beats ${player}`; 
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

// allows player to play until player or computer reaches five wins and winner declared
const play = function () {
    let playerScore = 0;
    let computerScore = 0;
    resultsDisplay.textContent = 'Make a selection to begin'
    for (const button of buttons) {
        button.addEventListener('click', function gameLogic () {
            const result = playRound(button.id, getComputerChoice());
                if (result === 'win') {
                    playerScore++;
                    playerScoreDisplay.textContent = `Player: ${playerScore}`;
                    if (playerScore === 5) {
                        resultsDisplay.textContent = `You WIN the game!!!`;
                        disableButtons();   
                    }  
                } else if (result === 'lose') {
                    computerScore++;
                    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
                    if (computerScore === 5) {
                        resultsDisplay.textContent = `You LOSE the game!!!`;
                        disableButtons();
                    }
                    
                    
                }
    
        })}}

play();