//associando cada elemento html a uma variável
const paperButton = document.getElementById("paper");
const rockButton = document.getElementById("rock");
const scissorsButton = document.getElementById("scissors");
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const boxresponsive = document.getElementById("boxreponse")
const result = document.getElementById("result")
const userEmoji = document.getElementById("user-choice")
const computerEmoji = document.getElementById("computer-choice")
const resetButton = document.getElementById("reset-button")

//let porque o valor da variável aumenta
let userScore = 0;
let computerScore = 0;

//criando uma função para englobar cada um dos botôes e gerar um parâmetro para cada
function main() {
    paperButton.addEventListener("click", function() {
        game("paper");

})
    rockButton.addEventListener("click", function() {
        game("rock");
    })
    scissorsButton.addEventListener("click", function() {
        game("scissors");
    })
}
//chamando a função
main()

//função para o computador jogar uma opção aleatória
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissors":
            userEmoji.innerHTML = "&#9994"
            computerEmoji.innerHTML = "&#9996"
            win(userChoice, computerChoice)
            break;
        case "paperrock":
            userEmoji.innerHTML = "&#9995"
            computerEmoji.innerHTML = "&#9994"
            win(userChoice, computerChoice)
            break
        case "scissorspaper":
            userEmoji.innerHTML = "&#9996"
            computerEmoji.innerHTML = "&#9995"
            win(userChoice, computerChoice)
            break;
        case "scissorsrock":
            userEmoji.innerHTML = "&#9996"
            computerEmoji.innerHTML = "&#9994"
            lose(userChoice, computerChoice)
            break;
        case "rockpaper":
            userEmoji.innerHTML = "&#9994"
            computerEmoji.innerHTML = "&#9995"
            lose(userChoice, computerChoice)
            break;
        case "paperscissors":
            userEmoji.innerHTML = "&#9995"
            computerEmoji.innerHTML = "&#9996"
            lose(userChoice, computerChoice)
            break;
        case "scissorsscissors":
            userEmoji.innerHTML = "&#9996"
            computerEmoji.innerHTML = "&#9996"
            tie(userChoice, computerChoice)
            break; 
        case "rockrock":
            userEmoji.innerHTML = "&#9994"
            computerEmoji.innerHTML = "&#9994"
            tie(userChoice, computerChoice)
            break; 
        case "paperpaper":
            userEmoji.innerHTML = "&#9995"
            computerEmoji.innerHTML = "&#9995"
            tie(userChoice, computerChoice)
            break;        
    }
  }

  function win(user, computer) {
      userScore++;
      userScore_span.innerHTML = userScore;
      computerScore_span.innerHTML = computerScore;
      document.getElementById("boxresponse").style.backgroundColor = "#A6FFBF"
      result.innerHTML = "🎉Você ganhou!!🎉"
  }

  function lose(user, computer) {
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      userScore_span.innerHTML = userScore;
      document.getElementById("boxresponse").style.backgroundColor = "#FFA6A6"
      result.innerHTML = "Você perdeu!!"
  }

    function tie(user, computer) {
      computerScore_span.innerHTML = computerScore;
      userScore_span.innerHTML = userScore;
      document.getElementById("boxresponse").style.backgroundColor = "#EBF4FE"
      result.innerHTML = "empate!"
  }

        resetButton.addEventListener("click", function() {resetGame()})
    
   
    function resetGame() {
        userScore = 0;
        userScore_span.innerHTML = userScore;
        computerScore= 0;
        computerScore_span.innerHTML = computerScore;
        document.getElementById("boxresponse").style.backgroundColor = "#EBF4FE"
        userEmoji.innerHTML = "&#129489"
        computerEmoji.innerHTML = "&#129302"
        result.innerHTML = ""
    }
    
    


