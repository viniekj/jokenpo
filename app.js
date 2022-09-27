const game = () =>{
    let playerScore = 0;
    let computerScore = 0;
}
const playGame = () =>{
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissor= document.getElementById("scissor");
    const playerOptions = [rock,paper,scissor];
    const computerOptions = ["rock","paper","scissors"]
}
/*Função de ínicio de jogo*/
playerOptions.forEach(option => {
    option.addEventListener("click",function(){
        const choiceNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[choiceNumber];

        winner(this.innerText,computerChoice);
    })
})

/*Função para decidir o vencedor*/ 
const winner = (player,computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector("p-count");
    const computerScoreBoard = document.querySelector("c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
         result.textContent = "Empate"
    }
    else if(player == "rock"){
        if(computer == "paper"){
            result.textContent = "Computador Wins (BRUTALITY)";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = "Jogador Wins (BRUTALITY)"
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }

    }else if(player == "scissors"){
        if (computer == "rock"){
            result.textContent = "Computador Wins (FATALITY)";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = "Jogador Wins (FATALITY)";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
    }else if (player == "paper"){
        if (computer == "rock"){
            result.textContent = "Computador Wins (Flawless Victory)";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = "Jogador Wins (Flawless Victory)";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
        
}