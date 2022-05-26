const game = () => {
    let pScore = 0;
    let cScore = 0;
    let pQuantumScore = 0;
    let cQuantumScore = 0;
  
    //Start the Game
    const startGame = () => {
      let buttons = document.querySelectorAll(".intro button");
   
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
      const rules = document.querySelector(".rules");
      const credits = document.querySelector(".credits");

      const buttonBack = document.querySelector(".rulesMenu button");
  
      buttons[0].addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
      buttons[1].addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        rules.classList.add("fadeIn");
      });
      buttons[2].addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        credits.classList.add("fadeIn");
      });
      buttonBack.addEventListener("click", () => {
        ruleScreen.classList.add("fadeOut");
        introScreen.classList.add("fadeIn");
      })

      
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["quantum shampoo", "schrodinger's cat", "quantum life coach"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      const playerQuantumScore = document.querySelector(".player-score h3");
      const computerQuantumScore = document.querySelector(".computer-score h3");

      playerScore.textContent = pScore;
      computerScore.textContent = cScore;

      playerQuantumScore.textContent = pQuantumScore;
      computerQuantumScore.textContent = cQuantumScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "A Measurement Has Occured!";
        if(pQuantumScore > cQuantumScore){
            pScore++;
            pQuantumScore = 0;
            cQuantumScore = 0;
            updateScore();
            return;
        }
        else if (pQuantumScore < cQuantumScore) {
            cScore++;
            pQuantumScore = 0;
            cQuantumScore = 0;
            updateScore();
            return;
        }
        // what happens when they are still tied? 
        // For now, neither of them win.
        else {
            pQuantumScore = 0;
            cQuantumScore = 0;
            updateScore();
            return;
        }
      }
      //Check for Quantum Shampoo
      if (playerChoice === "quantum shampoo") {
        if (computerChoice === "quantum life coach") {
          winner.textContent = "You Got the Qubit!";
          pQuantumScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "The Machine Got the Qubit!";
          cQuantumScore++;
          updateScore();
          return;
        }
      }
      //Check for Quantum Life Coach
      if (playerChoice === "quantum life coach") {
        if (computerChoice === "schrodinger's cat") {
          winner.textContent = "You Got the Qubit!";
          pQuantumScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "The Machine Got the Qubit!";
          cQuantumScore++;
          updateScore();
          return;
        }
      }
      //Check for Schrodinger's Cat
      if (playerChoice === "schrodinger's cat") {
        if (computerChoice === "quantum shampoo") {
          winner.textContent = "You Got the Qubit!";
          pQuantumScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "The Machine Got the Qubit!";
          cQuantumScore++;
          updateScore();
          return;
        }
      }
    };
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();