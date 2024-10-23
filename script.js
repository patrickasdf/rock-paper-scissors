function getComputerChoice() {
    numberChosen = Math.floor(Math.random() * 3); // Returns 0, 1, 2
    if (numberChosen === 0) {
        console.log("Computer chose Rock")
        return 0
    } 
    else if (numberChosen === 1) {
        console.log("Computer chose Paper")
        return 1
    }
    console.log("Computer chose Scissors") // value is 2
    return 2
};

function getHumanChoice() {
    choice = prompt("Choose 'Rock', 'Paper', or 'Scissors'")
    if (choice != null){
        choice = choice.toLowerCase()
        while (choice === "rock" || choice === "paper" || choice === "scissors"){
            if (choice === "rock") {
                console.log("Player chose Rock")
                return 0
            }
            else if (choice === "paper") {
                console.log("Player chose Paper")
                return 1
            }
            console.log("Player chose Scissors")
            return 2
        }
        console.log("Invalid player selection");       
    }
};

let humanScore = 0;
let computerScore = 0;
console.log("Initial scores: Player = " + parseInt(humanScore) 
    + " & Computer = " + computerScore)

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 0) { // Player chose rock
        if (computerChoice === 1){ // Computer paper
            console.log("You lose! Paper beats Rock")
            computerScore++;
        }
        else if (computerChoice === 2) { //Computer scissors
            console.log("You win! Rock beats Scissors")
            humanScore++;
        }
        console.log("Tie! Both chose Rock") // Computer rock
        humanScore;
    }

    else if (humanChoice === 1) { // Player chose paper
        if (computerChoice === 0){ // Computer rock
            console.log("You win! Paper beats Rock")
            humanScore++;
        }
        else if (computerChoice === 2) { //Computer scissors
            console.log("You lose! Scissors beats Paper")
            computerScore++;
        }
        console.log("Tie! Both chose Paper") // Computer paper
        humanScore; 
    }

    else if (humanChoice === 2) { // Player chose scissors
        if (computerChoice === 0) { // Computer rock
            console.log("You lose! Rock beats Scissors")
            computerScore++;
        }
        if (computerChoice === 1) { // Computer paper
            console.log("You win! Scissors beats paper")
            humanScore++;
        }
        console.log("Tie! Both chose Scissors") // Computer scissors
    }
    console.log("End of round!")
    console.log("Player score = " + parseInt(humanScore) + 
        " & computer score = " + parseInt(computerScore))
    return

} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);