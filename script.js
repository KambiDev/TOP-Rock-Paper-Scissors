const getComputerChoice = () => {
    
    let aleatorio = Math.floor(Math.random() * 3) + 1;

    switch (aleatorio) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
};


const playGame = () => {

    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    const playRound = (humanChoice, computerChoice) => {

        if (humanChoice === computerChoice){
            result.textContent = 'Round Result: It is a tie!';
        }

        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ){
            humanScore++;
            result.textContent = 'Round Result: Human wins!';
        }else{
            computerScore++;
            result.textContent = 'Round Result: Computer wins!';
        }

        roundsPlayed++;

        if (roundsPlayed === 5){
            if (humanScore > computerScore){
                result.textContent = `GAME OVER: You won! (${humanScore} - ${computerScore})`;
            }else if (humanScore === computerScore){
                result.textContent = `GAME OVER: Computer won! (${computerScore} - ${humanScore})`;
            }else{
                result.textContent = `GAME OVER: It was a total tie! (${humanScore} - ${computerScore})`;
            }
            humanScore = 0;
            computerScore = 0;
            roundsPlayed = 0;
        }
    };

    const btnRock = document.querySelector('.rock');
    const btnPaper = document.querySelector('.paper');
    const btnScissors = document.querySelector('.scissors');
    const result = document.querySelector('.resultado');

    btnRock.addEventListener('click', () => playRound('rock', getComputerChoice()));
    btnPaper.addEventListener('click', () => playRound('paper', getComputerChoice()));
    btnScissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

};

playGame();

