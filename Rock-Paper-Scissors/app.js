let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');
const message = document.querySelector('#msg');
const userScr = document.querySelector('#user-score');
const compScr = document.querySelector('#comp-score');
const compChoose = document.querySelector('#computerChoose');

const drawGame = () => {
    console.log("It's a tie");
    message.innerText = "It's a tie!";
    message.style.background= "#081b31";
    
}

const winGame = () => {
    userScore++;
    console.log("You win");
    userScr.innerText = userScore;
    message.innerText = "You win!";
    message.style.background= "Green"; 

}

const loseGame = () => {       
    computerScore++; 
    console.log("You lose");
    compScr.innerText =  computerScore;
    message.innerText = "You lose!";
    message.style.background= "red"
}

const compChoice = () =>{
    options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}


const playGame = (userChoice) => {
     console.log("User's choices " , userChoice);
     const computerChoice = compChoice();
     compChoose.innerText = "Computer choose " + computerChoice + "!";
     console.log("Computer's choices " , computerChoice);

     if(userChoice === computerChoice){
         drawGame();    
     }else{
            if(userChoice === 'rock' && computerChoice === 'scissors'){
                winGame();
            }else if(userChoice === 'paper' && computerChoice === 'rock'){
                winGame();
            }else if(userChoice === 'scissors' && computerChoice === 'paper'){
                winGame();
            }else{
                loseGame();
            }
     }

}
 
choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute('id');
      playGame(userChoice);
    });

});