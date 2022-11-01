
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
    console.log(`You win! ${player} beats ${computerSelect}`); 
    return 'win';
} else if (player === 'rock' && computerSelect === 'paper' || player === 'paper' && computerSelect === 'scissors' || player === 'scissors' && computerSelect === 'rock') {
    console.log(`You lose! ${computerSelect} beats ${player}`); 
    return 'lose';
} else {
    console.log(`Draw! You both chose ${player}.`);
    return 'draw';
}
}

// plays five rounds of game against computer and displays results at end
const game = function () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const choicePrompt = prompt('Choose rock, paper or scissors: ');
        if (choicePrompt === 'rock' || choicePrompt === 'paper' || choicePrompt === 'scissors') {
            const round = playRound(choicePrompt, getComputerChoice());
            if (round === 'win') {
                playerScore++;
            } else if (round === 'lose') {
                computerScore++;
            }
        } else {
            console.log("Please type 'rock', 'paper', or 'scissors'");
            i--;
        }
    }; 

    if (playerScore > computerScore) {
        console.log('');
        console.log(`You WIN the game ${playerScore} to ${computerScore}!`);
    } else if (computerScore > playerScore) {
        console.log('');
        console.log(`You LOSE the game ${playerScore} to ${computerScore}!`);
    } else console.log(`This game was a DRAW, you both scored ${playerScore} points!`);
}

game();