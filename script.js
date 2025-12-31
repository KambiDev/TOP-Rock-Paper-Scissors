const getComputerChoice = () => {
    
    let aleatorio = Math.floor(Math.random() * 3) + 1;

    switch (aleatorio) {
        case 1:
            return 'piedra';
        case 2:
            return 'papel';
        case 3:
            return 'tijera';
    }

};


const getHumanChoice = () => {

    let usuario = prompt(
    `Ingrese una opcion:
    Piedra
    Papel
    Tijera`
    );

    return usuario.toLowerCase();
};


const playGame = () => {

    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {

        if (humanChoice === computerChoice){
            alert('Empate');
            return;
        }

        if (
            (humanChoice === 'piedra' && computerChoice === 'tijera') ||
            (humanChoice === 'papel' && computerChoice === 'piedra') ||
            (humanChoice === 'tijera' && computerChoice === 'papel')
        ){
            humanScore++;
            alert('has ganado un punto!');
        }else{
            computerScore++;
            alert('la computadora ha ganado un punto');
        }
    };

    //Ronda 1
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Ronda 2
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Ronda 3
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Ronda 4
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Ronda 5
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore){
        alert('Has ganado!!!');
    }else if (humanScore === computerScore){
        alert('Es un empate!!!');
    }else{
        alert('La computadora ha ganado!!!');
    }
};

playGame();