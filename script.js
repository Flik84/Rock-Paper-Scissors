


const getComputerChoice = function () {
    const choice = Math.floor(Math.random() * 3 + 1);
    console.log(choice);
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else return 'scissors';
}

console.log(getComputerChoice());