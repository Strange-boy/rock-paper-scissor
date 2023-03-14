function game(){
    let pScore = 0;
    let cScore = 0;

    //on starting the game we need to perform a set of functions
    function start(){
        const playerBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');


        //on clicking the play button => we want to fade out the intro screeen and bring back the match screen
        playerBtn.addEventListener("click",() => {
            introScreen.classList.add("fadeOut");
            matchScreen.classList.remove("fadeOut");
            matchScreen.classList.add("fadeIn");
        });
    }

    //main logic that needs to be run while playing the match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const computerHand = document.querySelector(".computer-hand");
        const playerHand = document.querySelector(".player-hand");

        //inorder to select the computer options
        const computerOptions = ["rock", "paper", "scissors"];
        
        //now we have to loop through each button
        options.forEach(option => {
            option.addEventListener("click", function(){
                //inorder to generate the random options for the computer
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //here we would call the compare hands function
                compareHands(computerChoice, this.textContent);

                //inorder to change the image in accordance to the options selected
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            })
        })
        

        //this function simply updates the score when someone scores a point
        function updateScore(){
            const computerScore = document.querySelector(".computer-score p");
            const playerScore = document.querySelector(".player-score p");

            //we can update the computer and player score 
            computerScore.textContent = cScore;
            playerScore.textContent = pScore;
        }

        const compareHands = (computerChoice, playerChoice) => {
            
            const winner = document.querySelector(".winner");

            if(computerChoice === playerChoice){
                winner.textContent = "It is a Tie";
                return;
            }

            //if player choice is rock
            if(playerChoice == "rock"){
                if(computerChoice == "paper"){
                    winner.textContent = "Computer Wins";
                    cScore += 1;
                } else {
                    winner.textContent = "You Won";
                    pScore += 1;
                }
            } else if(playerChoice == "paper"){

                //if you select paper
                if(computerChoice == "scissors"){
                    winner.textContent = "Computer Wins";
                    cScore += 1;
                } else {
                    winner.textContent = "You Won";
                    pScore += 1;
                }
            } else {
                //if you select scissors
                if(computerChoice == "rock"){
                    winner.textContent = "Computer Wins";
                    cScore += 1;
                } else {
                    winner.textContent = "You Won";
                    pScore += 1;
                }
            }

            //we call this function inorder to update the score
            updateScore();
        }
    };

    //we need to call the start games function
    start();
    playMatch();
}

//we need to call the main function
game();