const choices = ["rock", "paper", "scissors"]







function game(){
    playRound()
}

function playRound() {
    const playerSelection = playerChoice ();
    const computerSelection = computerChoice ();
    const winner = checkWinner (playerSelection, computerSelection);
}


function playerChoice(){
    let input = prompt("what is your choice");
    while (input == null){
        input = prompt("what is your choice gang");
    }
    input = input.toLowerCase();
    let check = validateInput (input);
    while (check == false) {
        input = prompt("what is your choice again");
        while (input == null){
            input = prompt("what is your choice gang");
        }
        input = input.toLowerCase();
        check = validateInput (input);
    }
    console.log ("input");
}




function computerChoice() {
    return choices [Math.floor(Math.random() * choices.length)];
}

function validateInput (choice){
     if( choice.includes(choice)){
        return true;
     } else {
        return false;

}}

function checkWinner(choiceP, ChoiceC){
    if (choiceP === ChoiceC){
        return "Tie"
    }
    else if ((choiceP === "rock" && choiceC === 'scissors') 
    || (choiceP === "paper" && choiceC === 'rock') ||
    (choiceP === "scissors" && choiceC === 'paper')){
        return "Player"
    } else {
        return "Computer"
    }
}

game()