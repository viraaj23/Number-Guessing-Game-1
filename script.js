// Game settings
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const MAX_ATTEMPTS = 10;

// Game variables
let secretNumber;
let attempts = 0;
let gameOver = false;

// Get HTML elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const attemptsDisplay = document.getElementById("attempts");

// Start the game
function startGame() {

    secretNumber =
        Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1))
        + MIN_NUMBER;

    attempts = 0;
    gameOver = false;

    attemptsDisplay.textContent = attempts;
    message.textContent = "Make your first guess!";
    hint.textContent = "💡 Enter a number between 1 and 100.";

    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;

    guessInput.focus();
}


// Check the guess
function checkGuess() {

    if (gameOver) {
        return;
    }

    const guess = Number(guessInput.value);

    // Check for invalid input
    if (
        guessInput.value === "" ||
        guess < MIN_NUMBER ||
        guess > MAX_NUMBER
    ) {
        message.textContent =
            "⚠️ Please enter a number between 1 and 100.";

        return;
    }

    // Increase attempts
    attempts++;
    attemptsDisplay.textContent = attempts;


    // Check the guess
    if (guess === secretNumber) {

        message.textContent =
            "🎉 Correct! You guessed the number!";

        hint.textContent =
            `The number was ${secretNumber}. You used ${attempts} attempt(s).`;

        endGame();

    } else if (guess > secretNumber) {

        message.textContent = "⬆️ Too High!";
        hint.textContent = "Try a smaller number.";

    } else {

        message.textContent = "⬇️ Too Low!";
        hint.textContent = "Try a larger number.";
    }


    // Maximum attempts
    if (attempts >= MAX_ATTEMPTS && guess !== secretNumber) {

        message.textContent = "😔 Game Over!";

        hint.textContent =
            `The correct number was ${secretNumber}.`;

        endGame();
    }

    guessInput.value = "";

    if (!gameOver) {
        guessInput.focus();
    }
}


// End the game
function endGame() {

    gameOver = true;

    guessInput.disabled = true;
    guessButton.disabled = true;
}


// Button events
guessButton.addEventListener("click", checkGuess);

restartButton.addEventListener("click", startGame);


// Press Enter to guess
guessInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkGuess();
    }

});


// Start the game
startGame();