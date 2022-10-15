const MAXIMUM_TURN_COUNT = 5;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return "rock";
    break;
    case 1:
      return "paper";
    break;
    case 2:
      return "scissors";
    break;
    default:
      console.log("Something went wrong, please try again.")
  };
};

function getPlayerChoice() {
  let playerInput = prompt("Rock, Paper, or Scissors?");
  return playerInput.toLowerCase();
};

function evaluateChoices(playerChoice, computerChoice) {
  let result = '';
  if (playerChoice == computerChoice) {
    result = 'tie';
  } else if ((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissors' && computerChoice == 'paper')) {
    result = 'win';
  } else {
    result = 'lose';
  };
  return result;
};

function createOutcomeDialogue(roundOutcome, playerChoice, computerChoice) {
  switch (roundOutcome) {
    case 'win':
      console.log(`Player wins round! ${capitalizeFirstLetter(playerChoice)} beats ${computerChoice}.`);
    break;
    case 'lose':
      console.log(`Computer wins round! ${capitalizeFirstLetter(computerChoice)} beats ${playerChoice}.`);
    break;
    default:
      console.log(`It's a tie! Both opponents played ${playerChoice}.`);
  };
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const roundOutcome = evaluateChoices(playerChoice, computerChoice);
  createOutcomeDialogue(roundOutcome, playerChoice, computerChoice);
  return roundOutcome
};

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let turn = 1; turn <= MAXIMUM_TURN_COUNT;) {
    while (playerScore < 3 && computerScore < 3) {
      console.log(`Turn ${turn}`)
      let roundOutcome = playRound();
      switch (roundOutcome) {
        case 'win':
          playerScore++;
          turn++;
        break;
        case 'lose':
          computerScore++;
          turn++;
        break;
      };
    };
  };
  const gameResult = (playerScore > computerScore) ? 'playerWin' : 'computerWin';
  if (gameResult == 'playerWin') {
    console.log(`Player wins series with a score of ${playerScore} to ${computerScore}!`);
  } else {
    console.log(`Computer wins series with a score of ${computerScore} to ${playerScore}!`);
  }
};