const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const scoreList = document.getElementById('score');
const scoreList1 = document.getElementById('score-1');
let userChoice;
let computerChoice;
let result;



const resultPic = document.getElementById('result-pic');
const userPic = document.getElementById('user-pic');
const computerPic = document.getElementById('computer-pic');

const paper = "images/paper.jpg";
const rock = "images/rock.webp";
const scissors = "images/scissors.jpg";
const win = "images/win.jpg";
const lose = "images/lose.jpg";
const draw = "images/draw.png"


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id;
   userChoiceDisplay.innerHTML = userChoice;


  
    switch(userChoice){ 
        case 'rock':
        userPic.src = rock;
        break;
        case 'paper':
        userPic.src = paper;
        break;
        case 'scissors':
        userPic.src = scissors;
        break;
    }
    
   gererateComputerChoice();
   getResult();
   switch(computerChoice){
    case 'rock':
    computerPic.src = rock;
    break;
    case 'paper':
    computerPic.src = paper;
    break;
    case 'scissors':
    computerPic.src = scissors;
    break;
}
   if(result === 'you win!') {
        resultPic.src = win;
   }else if( result === 'it is a draw!'){
       resultPic.src = draw;
   }else{
       resultPic.src = lose;
   }
   generateResultIcon();   
   announceWinnerAndReset();

}));

function gererateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1 );
    console.log(randomNumber);

    if(randomNumber === 1){
        computerChoice = "rock";
    }
    if(randomNumber === 2){
        computerChoice = "scissors";
    }
    if(randomNumber === 3){
        computerChoice = "paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

 
function getResult() {
    if(computerChoice === userChoice){
        result = 'it is a draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lose!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result; 
}

let userScore = 0;
let computerScore = 0;

generateResultIcon = () => {
    const resultIcon = document.createElement('li');

        if (result === 'you win!'){
            userScore++;
            resultIcon.innerHTML = '✔️'+ userScore;
            scoreList.appendChild(resultIcon);
        } 
        if(result === 'you lose!'){
            computerScore++;
            resultIcon.innerHTML = '✔️' + computerScore;
            scoreList1.appendChild(resultIcon);

        }
        if(result === 'it is a draw!'){
            resultIcon.innerHTML = 'draw';
        }

} 



announceWinnerAndReset = () => {
    if(userScore === 5 || computerScore === 5){
        userScore === 5 ? alert('You win! Click to restart!') : alert('You lost! Click to restart');

        userScore = 0;
        computerScore = 0;
        removeAllChildNodes(scoreList);
        removeAllChildNodes(scoreList1);
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}