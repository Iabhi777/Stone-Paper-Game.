let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); //we selected all divs with choice class.
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");
const restart = document.querySelector("#reset");

document.getElementById("reset").onclick =  () => {
   document.getElementById("comp-score").innerHTML = "0";
   document.getElementById("user-score").innerHTML = "0";
   document.getElementById("msg").innerHTML = "Play Your MOVE!!"
   msg.style.backgroundColor = "#081b31";
};

const genComputerChoice = () => {
   const options = ["rock", "paper", "scissors"];
   const rdmIdx = Math.floor(Math.random() * 3)
   return options[rdmIdx];
}

const drawGame = () => {
   msg.innerText = "The game has drawn ;]"
   msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
   if (userWin === true) {
      userScore++
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} Beats ${compChoice}`;
      msg.style.backgroundColor = "green";
   }
   else {
      compScore++
      CompScorePara.innerText = compScore;
      msg.innerText = "You lose :("
      msg.style.backgroundColor = "red";
   }

}

const playGame = (userChoice) => {
   console.log("user choice is", userChoice);
   const compChoice = genComputerChoice();
   console.log("Comp choice is", compChoice);

   if (userChoice === compChoice) {
      drawGame();
   }
   else {
      let userWin = true;
      if (userChoice === "rock") {
         userWin = compChoice === "paper" ? false : true;
      }
      else if (userChoice === "scissors") {
         userWin = compChoice === "rock" ? false : true;
      }
      else {
         userWin = compChoice === "scissors" ? false : true;
      }

      showWinner(userWin, userChoice, compChoice);
   }
}


choices.forEach((choice) => { // we created for each loop for every choice and then added event listner on click.
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
   });

}); 