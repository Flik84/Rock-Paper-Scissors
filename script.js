


const getComputerChoice = function () {
    const choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else return 'scissors';
}

const playRound = function (playerSelect, computerSelect) {
    playerSelectLower= playerSelect.toLowerCase();
if (playerSelectLower === 'rock' && computerSelect === 'scissors' || playerSelectLower === 'paper' && computerSelect === 'rock' || playerSelectLower === 'scissors' && computerSelect === 'paper') {
    return `You win! ${playerSelectLower} beats ${computerSelect}`;
} else if (playerSelectLower === 'rock' && computerSelect === 'paper' || playerSelectLower === 'paper' && computerSelect === 'scissors' || playerSelectLower === 'scissors' && computerSelect === 'rock') {
    return `You lose! ${computerSelect} beats ${playerSelectLower}`;
} else return `Draw! You both chose ${playerSelectLower}.`;
}

const playerSelect = prompt('Choose rock, paper or scissors: ')

