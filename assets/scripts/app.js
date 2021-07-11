const playerScore = document.getElementById('human-score');
const computerScore = document.getElementById('computer-score');
const choiceRock = document.getElementById('choice-rock');
const choicePaper = document.getElementById('choice-paper')
const choiceScissors = document.getElementById('choice-scissors');
const result = document.getElementById('result');
const choices = Array.from(document.querySelectorAll('.choice'));

let playerCount = 0;
let computerCount = 0;

const getComputerChoice = () => {
    const chance = Math.random();
    if (chance >= 0 && chance <= 0.32) {
        return 'ROCK';
    }
    if (chance >= 0.33 && chance <= 0.66) {
        return 'PAPER';
    }
    if (chance >= 0.67 && chance <= 1) {
        return 'SCISSORS';
    }
};

const startGame = (playerChoice) => {
    const computerChoice = getComputerChoice();

    if (playerChoice === 'ROCK' && computerChoice == 'SCISSORS'
        || playerChoice === 'PAPER' && computerChoice === 'ROCK'
        || playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {

        playerCount += 1;

        if (playerCount === 5) {
            result.textContent = 'Game over! You win!';
        }
        else {
            result.textContent = `Player wins! Your choice ${playerChoice} beats Computer choice ${computerChoice}`;
        }
    }
    else if (playerChoice === 'SCISSORS' && computerChoice == 'ROCK'
        || playerChoice === 'ROCK' && computerChoice === 'PAPER'
        || playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {

        computerCount += 1;

        if (computerCount === 5) {
            result.textContent = 'Game over! Computer wins!';
        }
        else {
            result.textContent = `Computer Wins! Computer choice ${computerChoice} beats your choice ${playerChoice}`;
        }
    }
    else {
        result.textContent = "It's a tie!";
    }

    playerScore.textContent = `${playerCount}`;
    computerScore.textContent = `${computerCount}`;
};

choices.forEach((choice) => 
    choice.addEventListener('click', () => {
        if (playerCount >= 5 || computerCount >= 5) {
            alert('Game over! Refresh the page to play again...');
            return;
        }
        startGame(choice.dataset.choice);
    })
); 