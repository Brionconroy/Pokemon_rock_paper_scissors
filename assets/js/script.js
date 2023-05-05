const userChoicePick = document.getElementById("user-pick");
const computerChoicePick = document.getElementById("computer-pick");
const displayBattleResult = document.getElementById("result");
const trainersPossibleChoice = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

// using event listener to pick the users choice and display it in the score area //

trainersPossibleChoice.forEach(button => button.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoicePick.innerHTML = userChoice;
    randomComputerChoice();
    battleResult();
    userScore();
    teamRocketScore();
}));

// random number generated for computer from 0-2 //

function randomComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3) + 1;
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

// displays result in result section //

function battleResult() {

    if (userChoice === computerChoice) {
        result = "Your Pokemon were evenly matched";
    }
    if (userChoice === "Venusaur" && computerChoice === "Blastoise") {
        result = "Winner";
    }
    if (userChoice === "Venusaur" && computerChoice === "Charizard") {
        result = "Loser";
    }
    if (userChoice === "Blastoise" && computerChoice === "Venusaur") {
        result = "Loser";
    }
    if (userChoice === "Blastoise" && computerChoice === "Charizard") {
        result = "Winner";
    }
    if (userChoice === "Charizard" && computerChoice === "Venusaur") {
        result = "Winner";
    }
    if (userChoice === "Charizard" && computerChoice === "Blastoise") {
        result = "Loser";
    }
    displayBattleResult.innerHTML = result;
}
