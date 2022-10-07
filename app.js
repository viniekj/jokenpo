const choices = document.querySelectorAll(".choice");
const resultDisplay = document.getElementById("result")
let userChoice;
let computerChoice;
let result;


choices.forEach(button => {
    button.addEventListener("click",(e) => {
    userChoice = e.target.id
    makeComputerChoice()
    winCondition()
    })
})

function makeComputerChoice(){
    const randomNum = Math.floor(Math.random() * choices.length)
    
    if(randomNum === 0){
        computerChoice = "rock"
    }
    if(randomNum === 1){
        computerChoice = "paper"
    }
    if(randomNum === 2){
        computerChoice = "scissors"
    }
    
}

function winCondition(){
    if(computerChoice === userChoice){
        result = "Empate"
    }
    if(computerChoice === "rock" && userChoice ==="paper"){
        result = "Você Venceu!"
    }
    if(computerChoice === "paper" && userChoice ==="scissors"){
        result = "Você Venceu!"
    }
    if(computerChoice === "scissors" && userChoice ==="rock"){
        result = "Você Venceu!"
    }
    if(computerChoice === "paper" && userChoice ==="rock"){
        result = "Você Perdeu :("
    }
    if(computerChoice === "rock" && userChoice ==="scissors"){
        result = "Você Perdeu :("
    }
    if(computerChoice === "scissors" && userChoice === "paper"){
        result = "Você Perdeu :("
    }
    resultDisplay.innerHTML = result

    if(result === "Você Venceu!"){
        resultDisplay.style.color = "green"
    }else if (result ==="Você Perdeu :("){
        resultDisplay.style.color = "red"
    }else{
        resultDisplay.style.color = "orange"
    }
    
}
 



