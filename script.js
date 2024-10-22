function getComputerChoice() {
    numberChosen = Math.floor(Math.random() * 3); // Returns 0, 1, 2
    if (numberChosen === 0) {
        return console.log("Rock")
    } 
    else if (numberChosen === 1) {
        return console.log("Paper")
    }
    return console.log("Scissors") // value is 2
};

function getHumanChoice() {
    choice = prompt("Choose with corresponding digit Rock(0),Paper(1),Scissors(2)")
    if (choice != null){
        choice = parseInt(choice);
        console.log(choice);
        while (choice >= 0 && choice <= 3){
            if (choice === 0) {
                return console.log("Rock")
            }
            else if (choice === 1) {
                return console.log("Paper")
            }
            return console.log("Scissors")
        }
        console.log("Invalid selection");       
    }
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice 
} 

//const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);