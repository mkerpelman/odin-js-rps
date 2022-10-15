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
      console.log(`Player wins! ${capitalizeFirstLetter(playerChoice)} beats ${computerChoice}.`);
    break;
    case 'lose':
      console.log(`Computer wins! ${capitalizeFirstLetter(computerChoice)} beats ${playerChoice}.`);
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
};

