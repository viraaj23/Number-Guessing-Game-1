````markdown
# 🎯 Number Guessing Game

A simple and interactive Number Guessing Game built using HTML, CSS, and JavaScript.

This project was created as part of the **Week 03 Web Development Task**.

---

## 🚀 Live Demo

You can add your GitHub Pages link here after deploying the project.

**Live Demo:** Coming Soon

---

## 📌 About the Project

The Number Guessing Game generates a random number between **1 and 100**.

The player has a maximum of **10 attempts** to guess the correct number.

After every guess, the game provides feedback:

- ⬆️ Too High
- ⬇️ Too Low
- 🎉 Correct Answer

The game also keeps track of the number of attempts and allows the player to restart the game.

---

## ✨ Features

- 🎲 Random number generation
- 🔢 Number range from 1–100
- ⌨️ User input
- ⬆️ Too High feedback
- ⬇️ Too Low feedback
- 🎯 Correct answer detection
- 🔢 Attempt counter
- ❤️ Maximum of 10 attempts
- 🔄 Restart button
- ⌨️ Enter key support
- 📱 Responsive design
- 🎨 Clean and modern interface

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

---

## 📂 Project Structure

```text
number-guessing-game/
│
├── index.html
├── style.css
├── script.js
└── README.md
````

---

## 🧠 JavaScript Concepts Used

This project demonstrates several basic JavaScript concepts.

### Variables

Variables are used to store values such as the secret number and number of attempts.

```javascript
let secretNumber;
let attempts;
let gameOver;
```

### Functions

Functions are used to organize the game logic.

```javascript
function startGame() {
    // Start the game
}

function checkGuess() {
    // Check the user's guess
}
```

### Conditional Statements

`if`, `else if`, and `else` are used to compare the user's guess with the secret number.

```javascript
if (guess === secretNumber) {
    // Correct
}
else if (guess > secretNumber) {
    // Too high
}
else {
    // Too low
}
```

### Random Number Generation

JavaScript's `Math.random()` and `Math.floor()` functions are used to generate the secret number.

```javascript
secretNumber =
    Math.floor(Math.random() * 100) + 1;
```

### Event Listeners

Event listeners allow the game to respond to button clicks and keyboard input.

```javascript
guessButton.addEventListener("click", checkGuess);
```

---

## 🎮 How to Play

1. Open the game.
2. Enter a number between 1 and 100.
3. Click the **Guess** button.
4. Check the feedback.
5. Use the feedback to make your next guess.
6. Try to find the secret number within 10 attempts.
7. Click **Restart Game** to play again.

---

## 📸 Screenshots

Add screenshots of your project here.

Example:

```text
![Game Screenshot](screenshot.png)
```

---

## 📚 Learning Outcome

Through this project, I practiced:

* JavaScript variables
* Functions
* Conditional statements
* Event handling
* Random number generation
* User input
* DOM manipulation
* Basic responsive web design

---

## 👨‍💻 Author

**Viraaj J P**

B.Tech Computer Science Engineering Student

---

## 📜 License

This project was created for educational purposes.

```
```
