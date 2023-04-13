let computerChoice;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 100) + 1;
    if (x <= 33) computerChoice = "rock";
    if (x > 33 && x <= 67) computerChoice = "scissors";
    if (x > 67 && x <= 100) computerChoice = "paper";
    return computerChoice
}

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = (prompt("Make your choice: rock, paper, or scissors!")).toLowerCase();
    
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        alert("Misinput! You made a typo!");
        return 0;
    }      
    if (playerSelection == computerSelection) {
        alert("Ditto! It's a draw!");
        return 1;
    }
    if (playerSelection == "rock" && playerSelection > computerSelection) {
        alert("Paper beats rock, you lose!");
        return 2;
    }
    if (playerSelection == "rock" && playerSelection < computerSelection) {
        alert("Rock beats scissors, you win!");
        return 3;
    }
    if (computerSelection == "rock" && computerSelection > playerSelection) {
        alert("Paper beats rock, you win!");
        return 3;
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("Scissors beat paper, you lose!");
        return 2;
    }
    if (computerSelection == "rock" && computerSelection < playerSelection) {
        alert("Rock beats scissors, you lose!");
        return 2;
    }   
    if (playerSelection == "scissors"  && computerChoice == "paper") {
        alert("Scissors beat paper, you win!");
        return 3;
    }
}

function game() {
    let draw = 0
    , win = 0
    , lose = 0;

    for (i = 0; i < 5; ++i) {
        let result = playRound();
        if (result == 0) i -= 1;
        if (result == 1) {
            console.log("draw");
            ++draw;
        }
        if (result == 2) {
            console.log("lose");
            ++lose;
        }
        if (result == 3) {
            console.log("win");
            ++win;
        }
    }

    alert(`Game end! You had a total of ${draw} ${(draw > 1 || draw == 0) ? "draws" : "draw" }, ${win} ${(win > 1 || win == 0) ? "wins" : "win"}, and ${lose} ${(lose > 1 || lose == 0) ? "losses" : "loss"}`);

    return [draw, win, lose];
}

var janken = document.getElementById("janken");
janken.addEventListener("click", game);

