/*jshint esversion: 6 */

var userChoicePick = document.getElementById("user-pick");
var computerChoicePick = document.getElementById("computer-pick");
var displayBattleResult = document.getElementById("result");
var trainersPossibleChoice = document.querySelectorAll("button");
var userChoice;
var computerChoice;
var result;

// using event listener to pick the users choice and display it in the score area //

trainersPossibleChoice.forEach(button => button.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoicePick.innerHTML = userChoice;
    randomComputerChoice();
    battleResult();
}));

// random number generated for computer from 0-2 //

function randomComputerChoice() {

    var randomNumber = Math.floor(Math.random() * 3) + 1;
  
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
}

// displays result in result section //

function battleResult() {

    if (userChoice === computerChoice) {
        result = "Draw";
     }
     else if (userChoice === "Venusaur" && computerChoice === "Blastoise") {
        result = "Winner";
     }
     else if (userChoice === "Venusaur" && computerChoice === "Charizard") {
        result = "Loser";
     }
     else if (userChoice === "Blastoise" && computerChoice === "Venusaur") {
        result = "Loser";
     }
     else if (userChoice === "Blastoise" && computerChoice === "Charizard") {
        result = "Winner";
     }
     else if (userChoice === "Charizard" && computerChoice === "Venusaur") {
        result = "Winner";
     }
     else if (userChoice === "Charizard" && computerChoice === "Blastoise") {
        result = "Loser";
     }
    displayBattleResult.innerHTML = result;
}