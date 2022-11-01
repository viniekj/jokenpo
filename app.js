const choices = document.querySelectorAll(".choice");
const resultDisplay = document.getElementById("result");
const computerDisplay = document.getElementById("computerDisplay");
const playerDisplay = document.getElementById("playerDisplay");
let userChoice;
let computerChoice;
let result;




choices.forEach(button => {
    button.addEventListener("click",(e) => {
    userChoice = e.target.id
    playerDisplay.innerHTML = userChoice
    makeComputerChoice()
    winCondition()
    })
})

function makeComputerChoice(){
    const randomNum = Math.floor(Math.random() * choices.length)
    
    if(randomNum === 0){
        computerChoice = "Pedra"
    }
    if(randomNum === 1){
        computerChoice = "Papel"
    }
    if(randomNum === 2){
        computerChoice = "Tesoura"
    }
    computerDisplay.innerHTML = computerChoice
    
    
}

function winCondition(){
    if(computerChoice === userChoice){
        result = "Empate"
    }
    if(computerChoice === "Pedra" && userChoice ==="Papel"){
        result = "Você Venceu!"
    }
    if(computerChoice === "Papel" && userChoice ==="Tesoura"){
        result = "Você Venceu!"
    }
    if(computerChoice === "Tesoura" && userChoice ==="Pedra"){
        result = "Você Venceu!"
    }
    if(computerChoice === "Papel" && userChoice ==="Pedra"){
        result = "Você Perdeu :("
    }
    if(computerChoice === "Pedra" && userChoice ==="Tesoura"){
        result = "Você Perdeu :("
    }
    if(computerChoice === "Tesoura" && userChoice === "Papel"){
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
 



