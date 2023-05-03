const userChoicePick = document.getElementById("user-pick");
const computerChoicePick = document.getElementById("computer-pick");
const displayAnswer = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoicePick.innerHTML = userChoice;
    randomComputerChoice();
}));

// random number generated for computer from 0-2 //

function randomComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = "Venusaur";
    }
    if (randomNumber === 2) {
        computerChoice = "Blastoise";
    }
    if (randomNumber === 3) {
        computerChoice = "Charizard";
    }
    computerChoicePick.innerHTML = computerChoice;
};