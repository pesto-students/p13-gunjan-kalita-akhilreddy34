let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
  MORE_MOVES_LEFT: 1,
  HUMAN_WINS: 2,
  COMPUTER_WINS: 3,
  DRAW_GAME: 4,
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // Setup the click event for the "New game" button
  const newBtn = document.getElementById("newGameButton");
  newBtn.addEventListener("click", newGame);

  // Create click-event handlers for each game board button
  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.addEventListener("click", function () {
      boardButtonClicked(button);
    });
  }

  // Clear the board
  newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3
// elements are the top row, the next 3 the middle row, and the last 3 the
// bottom row.
function getGameBoardButtons() {
  return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
  const buttons = getGameBoardButtons();

  // Ways to win
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  // Check for a winner first
  for (let indices of possibilities) {
    if (
      buttons[indices[0]].innerHTML !== "" &&
      buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
      buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML
    ) {
      // Found a winner
      if (buttons[indices[0]].innerHTML === "X") {
        return gameStatus.HUMAN_WINS;
      } else {
        return gameStatus.COMPUTER_WINS;
      }
    }
  }

  // See if any more moves are left
  for (let button of buttons) {
    if (button.innerHTML !== "X" && button.innerHTML !== "O") {
      return gameStatus.MORE_MOVES_LEFT;
    }
  }

  // If no winner and no moves left, then it's a draw
  return gameStatus.DRAW_GAME;
}

function newGame() {
  // TODO: Complete the function
  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = 0;

  getGameBoardButtons()?.forEach((button) => {
    button.innerHTML = "";
    button.className = "";
    // button.hasAttribute("disabled")
    button?.removeAttribute("disabled");
    //   : button?.setAttribute("disabled", "disabled");
    playerTurn = true;

    const turnInfoParagraph = document.getElementById("turnInfo");
    turnInfoParagraph.innerText = "Your turn";
  });
}

function boardButtonClicked(button) {
  const currentGameStatus = checkForWinner();
  // TODO: Complete the function
  if (currentGameStatus === gameStatus.MORE_MOVES_LEFT) {
    if (playerTurn) {
      button.innerHTML = "X";
      button.classList.add("x");
      button?.setAttribute("disabled", "disabled");
    } else {
      button.innerHTML = "o";
      button.classList.add("o");
      button?.setAttribute("disabled", "disabled");
    }

    switchTurn();
  }
}

function switchTurn() {
  // TODO: Complete the function

  const currentGameStatus = checkForWinner();

  const turnInfoParagraph = document.getElementById("turnInfo");

  if (currentGameStatus === gameStatus.MORE_MOVES_LEFT) {
    playerTurn = !playerTurn;

    if (!playerTurn) {
      computerMoveTimeout = setTimeout(makeComputerMove, 1000);
      turnInfoParagraph.innerHTML = "Computer's turn";
    } else {
      turnInfoParagraph.innerHTML = "Your turn";
    }
  } else {
    playerTurn = false;
    if (currentGameStatus === gameStatus.COMPUTER_WINS)
      turnInfoParagraph.innerHTML = "Computer wins!";
    if (currentGameStatus === gameStatus.HUMAN_WINS)
      turnInfoParagraph.innerHTML = "You win!";
    if (currentGameStatus === gameStatus.DRAW_GAME)
      turnInfoParagraph.innerHTML = "Draw game";
  }
}

function makeComputerMove() {
  // TODO: Complete the function
  const availableButtons = Array.from(getGameBoardButtons()).filter(
    (button) => !button?.innerHTML?.length
  );
  const randomButtonIndex = Math.floor(Math.random() * availableButtons.length);
  const randomButton = availableButtons[randomButtonIndex];
  randomButton.innerHTML = "O";
  randomButton.className = "o";
  randomButton.setAttribute("disabled", "disabled");
  switchTurn();
}
