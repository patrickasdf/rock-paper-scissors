function getComputerChoice() {
    numberChosen = Math.floor(Math.random() * 3); // Returns 0, 1, 2
    if (numberChosen === 0) {
        return "Rock";
    } 
    else if (numberChosen === 1) {
        return "Paper";
    }
    return "Scissors";
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") { 
        if (computerChoice === "Paper"){ 
            scoreTied.textContent = '';
            computerScore++;
        }
        else if (computerChoice === "Scissors") { 
            scoreTied.textContent = '';
            humanScore++;
        }
        else { // both rock
            scoreTied.textContent = "Tie! Both rock";
        }
    }

    else if (humanChoice === "Paper") { 
        if (computerChoice === "Rock"){ 
            scoreTied.textContent = '';
            humanScore++;
        }
        else if (computerChoice === "Scissors") { 
            scoreTied.textContent = '';
            computerScore++;
        }
        else { // both paper
            scoreTied.textContent = "Tie! Both paper";
        }
    }

    else if (humanChoice === "Scissors") { 
        if (computerChoice === "Rock") { 
            scoreTied.textContent = '';
            computerScore++;
        }
        if (computerChoice === "Paper") { 
            scoreTied.textContent = '';
            humanScore++;
        }
        else { // both scissors
            scoreTied.textContent = "Tie! Both scissors";
         } 
    }
    scoreDiv.textContent = "Player = " + humanScore + 
        " ** Computer = " + computerScore;
    recentChoices.textContent = "Recent selections:\nPlayer: " + 
        humanChoice + "\nComputer: " + computerChoice;
    return humanScore, computerScore;
} 

const div = document.querySelector('div');

const gameDeclaration = document.createElement("pre");
gameDeclaration.textContent = 
    " Rock, Paper, Scissors!\nSelect your choice below:";
gameDeclaration.style.backgroundColor = "pink";
gameDeclaration.style.maxWidth = "195px";
div.appendChild(gameDeclaration);

const btnRock = document.createElement("button");
btnRock.id = "btnRock";
btnRock.style.margin = "4px";
btnRock.textContent = "Rock";
div.appendChild(btnRock);
const btnPaper = document.createElement("button");
btnPaper.id = "btnPaper";
btnPaper.style.margin = "4px";
btnPaper.textContent = "Paper";
div.appendChild(btnPaper);
const btnScissors = document.createElement("button");
btnScissors.id = "btnScissors";
btnScissors.style.margin = "4px";
btnScissors.textContent = "Scissors";
div.appendChild(btnScissors);

div.addEventListener('click', (event) => {
    let target = event.target;
    scoreWinner.textContent = '';

    switch(target.id) {
        case 'btnRock':
            playRound("Rock", getComputerChoice());
            break;
        case 'btnPaper':
            playRound("Paper", getComputerChoice());
            break;
        case 'btnScissors':
            playRound("Scissors", getComputerChoice());
            break;
    }
    if (humanScore == 5) {
        scoreWinner.textContent = "You win! :)";
        computerScore = 0;
        humanScore = 0;
    }
    else if (computerScore == 5) {
        scoreWinner.textContent = "You lose :(";
        computerScore = 0;
        humanScore = 0;
    }
});

const scoreDiv = document.createElement("div");
scoreDiv.textContent = "Player = " + parseInt(humanScore) + 
        " **  Computer = " + parseInt(computerScore);
document.body.appendChild(scoreDiv); 

const scoreWinner = document.createElement("div");
scoreWinner.setAttribute("style", "color: red");
scoreWinner.style.fontSize = "20px";
document.body.appendChild(scoreWinner);

const recentChoices = document.createElement("pre");
document.body.appendChild(recentChoices);
const scoreTied = document.createElement("pre");
document.body.appendChild(scoreTied);
