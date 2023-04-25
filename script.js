let computerChoice;
let x = false;

var janken = document.querySelector(".janken");
var jankenTime = document.createTextNode("IT'S JANKEN TIME");

var gameBanner = document.querySelector(".game_banner");
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var output = document.querySelector(".output");
var results = document.querySelector(".results");
var playerScore = document.querySelector(".player_score");
var botScore = document.querySelector(".bot_score");
var bg = document.querySelector("#bg");
var buttonClick = document.querySelector("#button_click");
var resultScreen = document.querySelector("#result_screen");
var lose = document.querySelector("#lose");

function getComputerChoice() {
    let x = Math.floor(Math.random() * 100) + 1;
    if (x <= 33) computerChoice = 1;
    if (x > 67 && x <= 100) computerChoice = 2;
    if (x > 33 && x <= 67) computerChoice = 3;
    return computerChoice
}

function getPlayerChoice () {
    let playerChoice;
    return playerChoice;
}

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    
}

function playRound(e) {
    if (pScore == 5 || bScore == 5) return;

    let playerChoice = e.target.value;
    let computerChoice = getComputerChoice();
    if (!playerChoice) return; 
    
    console.log(playerChoice);
    console.log(computerChoice);
   
    if (playerChoice == computerChoice) output.textContent = "IT'S A DRAW";
    if (playerChoice == 1 && computerChoice == 2) {
        output.textContent = "A POINT FOR ME";
        ++bScore;
        botScore.textContent = bScore;}
    else if (playerChoice == 2 && computerChoice == 3) {
        output.textContent = "A POINT FOR ME";
        ++bScore;
        botScore.textContent = bScore;}
    else if (playerChoice == 3 && computerChoice == 1) {
        output.textContent = "A POINT FOR ME";
        ++bScore;
        botScore.textContent = bScore;}

    else {
        output.textContent = "LUCKY BASTARD";
        ++pScore;
        playerScore.textContent = pScore;}
        
    if (pScore == 5) {
        output.textContent = "I'LL GET YOU NEXT TIME";
        gameBanner.removeChild(jankenTime);
        gameBanner.appendChild(janken);
        janken.textContent = "PLAY AGAIN?";
        bg.pause();
        resultScreen.currentTime = 1;
        resultScreen.loop = true;
        resultScreen.play();
        return;}
    if (bScore == 5) {
        output.textContent = "AS EXPECTED, LOSER";
        gameBanner.removeChild(jankenTime);
        gameBanner.appendChild(janken);
        janken.textContent = "PLAY AGAIN?";
        bg.pause();
        lose.currentTime = 1;
        lose.loop = true;
        lose.play();
        return;}
}

function playState() {
    bScore = 0;
    pScore = 0;
    playerScore.textContent = "0";
    botScore.textContent = "0";
    rock.textContent = "ROCK";
    paper.textContent = "PAPER";
    scissors.textContent = "SCISSORS";
    gameBanner.removeChild(janken);
    gameBanner.appendChild(jankenTime); 
    output.textContent = "ROCK, PAPER OR SCISSORS?";
    
    window.addEventListener("click", playRound);
    
    rock.addEventListener("click", () => {
        buttonClick.currentTime = 0;
        buttonClick.play();
    });
    paper.addEventListener("click", () => {
        buttonClick.currentTime = 0;
        buttonClick.play();
    });
    scissors.addEventListener("click", () => {
        buttonClick.currentTime = 0;
        buttonClick.play();
    });

    resultScreen.pause();
    lose.pause();
    bg.currentTime = 0;
    bg.loop = true;
    bg.play();

}

janken.addEventListener("click", playState); 


