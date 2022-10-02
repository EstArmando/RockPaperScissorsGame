const playerText = document.querySelector('#player');
const computerText = document.querySelector('#computer');
const resultText = document.querySelector('#result');
const choices = document.querySelectorAll('.choice');

let player, computer;

choices.forEach(button => button.addEventListener("click",
    () => {
        if(button.getAttribute('name') == "rock") {
            player = "Rock";
        }
        else if(button.getAttribute('name') == "paper") {
            player = "Paper";
        }
        else {
            player = "Scissors";
        }
        
        computerTurn();
        playerText.innerHTML = `Player: ${player}`;
        computerText.innerHTML = `Computer: ${computer}`;
        resultText.innerHTML = `Result: ${checkWinner()}`;
    }
))

function computerTurn() {
    const rdm = Math.floor(Math.random() * 3) + 1;
    switch (rdm) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        default:
            computer = "Scissors";
    }
}

function checkWinner() {
    if(computer == player) {
        return "Draw!";
    }
    else if(computer == "Rock") {
        return (player == "Paper") ? "You win!" : "You lose";
    }
    else if(computer == "Paper") {
        return (player == "Scissors") ? "You win!" : "You lose";
    }
    else {
        return (player == "Rock") ? "You win!" : "You lose";
    }
}