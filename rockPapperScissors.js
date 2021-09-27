// computerPlay returns a random value Rock, papper scissor to play for the computer
const computerPlay = function () {
    const options = ["Rock", "Papper", "Scissor"];
    return options[Math.floor(Math.random() * 3)];
}

//PlayRound compare users choice with computer random choice and return an 2x1 array containing [<"WIN", "LOSE" or "DRAW">, <message to display>]
const playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection.toLowerCase()) {
        return ["DRAW", computerSelection + " vs " + playerSelection + " it\'s a DRAW!"];
    } else if ((playerSelection === "rock" && computerSelection==="Scissor") || (playerSelection === "papper" && computerSelection==="Rock") ||
    (playerSelection === "scissor" && computerSelection==="Papper")) {
        return ["WIN", "You win!" + playerSelection + " beats " + computerSelection];
    } else {
        return ["LOSE", "You lose! " + computerSelection + " beats " + playerSelection];
    }

}

// game function play five rounds and return a winner and display the score
function game() {
    var scores = {
        "WIN": 0,
        "LOSE": 0,
        "DRAW": 0
    }
    var gameResult = [];
    for (let i = 1; i <= 5; i++) {
        console.log(" ROUND ", i);
        var playerSelection = prompt("Enter your choice (Rock, Scissor, Papper): ");
        const computerSelection = computerPlay();
        gameResult = playRound(playerSelection, computerSelection);
        scores[gameResult[0]]++;
        console.log(gameResult[1]);
    }

    var winnerMessage = "";
    if (scores["WIN"] > scores["LOSE"]) {
        winnerMessage = "YOU WIN!!!";
    } else if (scores["LOSE"] > scores["WIN"]) {
        winnerMessage = "YOU LOSE!!!";
    } else if (scores["DRAW"] >= (scores["WIN"] || scores["LOSE"])) {
        winnerMessage = "IT\'S A DRAW!!!";
    } 
    console.log(scores, winnerMessage);
    return 1;
}

game();