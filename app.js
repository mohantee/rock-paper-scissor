const playerScore = document.getElementById('human-score');
const computerScore = document.getElementById('computer-score');
const choiceRock = document.getElementById('choice-rock');
const choicePaper = document.getElementById('choice-paper')
const choiceScissor = document.getElementById('choice-scissor');
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
        return 'SCISSOR';
    }
};

const startGame = (playerChoice) => {
    const computerChoice = getComputerChoice();

    if (playerChoice === 'ROCK' && computerChoice == 'SCISSOR'
        || playerChoice === 'PAPER' && computerChoice === 'ROCK'
        || playerChoice === 'SCISSOR' && computerChoice === 'PAPER') {

        playerCount += 1;

        if (playerCount === 5) {
            result.textContent = 'Game over! You win!';
        }
        else {
            result.textContent = 'Player wins!';
        }
    }
    else if (playerChoice === 'SCISSOR' && computerChoice == 'ROCK'
        || playerChoice === 'ROCK' && computerChoice === 'PAPER'
        || playerChoice === 'PAPER' && computerChoice === 'SCISSOR') {

        computerCount += 1;

        if (computerCount === 5) {
            result.textContent = 'Game over! Computer wins!';
        }
        else {
            result.textContent = 'Computer Wins!';
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
            return;
        }
        startGame(choice.dataset.choice);
    })
); 