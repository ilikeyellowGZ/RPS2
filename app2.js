const choices = ["rock", "paper", "scissors"];
const wrong = "NIgga what did i say";
const winners = [];

function game (){
    for (let i = 1; i <= 5; i++){
        playRound(i)
    }
    logWins()

    document.querySelector("button").textContent = "Play again";
}

function playRound (round){
    const playerSelection = playerChoice() ;
    const computerSelection = computerChoice ();
    const winner = checkWinner (playerSelection, computerSelection);
    winners.push(winner);
    logRounds(playerSelection,computerSelection, winner,round);
    
}

function playerChoice () {
    let input = prompt("what do you want nigga?") ;
    while (input == null ){
        input = prompt("what do you want again nigga?") ;
    }
    input = input.toLowerCase() ;
    let check = validateInput(input)   ;
    while (check ==  false) {
        input = prompt("Nigga is you blind? , rock paper or scissors cuh!") ;

        input = input.toLowerCase() ;
        check = validateInput(input) ;
    }



    return input ;
}
function computerChoice () {
    return choices [Math.floor(Math.random() * choices.length)];
}

function validateInput (choice){
    if (choices.includes(choice)) {
        return true;
    } else {
            return false;
        }
   
}

function checkWinner (choiceP, choiceC){
    if (choiceP == choiceC) {
        return "Tie";
    }

    else if ((choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper"))
        {
    return "Player";} 
    else {
        return "Computer";
    }
}
function logWins (){
    let playerWins = winners.filter((item) => item == "Player").length ;
    let computerWins = winners.filter((item) => item == "Computer").length ;
    let ties = winners.filter((item) => item == "Tie").length ;
    console.log("result:");
    console.log("Player Wins:", playerWins,);
    console.log("Computer Wins:",computerWins,);
    console.log("Ties:", ties);
}

function logRounds (playerChoice, computerChoice, winner,round){
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "won the round");
    console.log("-------------------------------------------")
}


