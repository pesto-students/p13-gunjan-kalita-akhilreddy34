let numberOfTimesUserGuessed = 0;
let previouslyGuessedNumber;

function playGuessingGame(numToGuess, totalGuesses = 10) {
  /** variables */
  let promptMessage = "Enter a number between 1 and 100.";
  const guessedNumberTooSmallMessage = `${previouslyGuessedNumber} is too small. Guess a larger number.`;
  const guessedNumberTooHighMessage = `${previouslyGuessedNumber} is too large. Guess a smaller number.`;

  if (numberOfTimesUserGuessed >= totalGuesses) return 0;
  else {
    /** condition to select the appropriate prompt message */
    if (previouslyGuessedNumber) {
      if (isNaN(previouslyGuessedNumber))
        promptMessage = `please enter a number`;
      else
        promptMessage =
          previouslyGuessedNumber > numToGuess
            ? guessedNumberTooHighMessage
            : guessedNumberTooSmallMessage;
    }

    const userGuessedNumber = prompt(promptMessage);
    if (userGuessedNumber == null) return 0;

    previouslyGuessedNumber = userGuessedNumber;

    numberOfTimesUserGuessed = !isNaN(previouslyGuessedNumber)
      ? numberOfTimesUserGuessed + 1
      : numberOfTimesUserGuessed;

    if (userGuessedNumber == numToGuess) {
      return numberOfTimesUserGuessed;
    } else return playGuessingGame(numToGuess, totalGuesses);
  }
}

console.log(playGuessingGame(5, 3));
