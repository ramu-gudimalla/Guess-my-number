'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = "Well done 🤞"

let secretNumber = Math.trunc(Math.random() * 20) + 1
// console.log(secretNumber)

let highScore = 0
let score = 20

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    // Checks the number is not null
    if (!guess) {
        // document.querySelector('.message').textContent = "🚫 No Number"
        displayMessage("🚫 No Number")
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? "📈 Too High" : "📉 Too Low"
            displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low")
            score--
            document.querySelector('.score').textContent = score
        } else {
            // document.querySelector('.message').textContent = "💥 You lost the game"
            displayMessage("💥 You lost the game")
            document.querySelector('.score').textContent = 0
        }
    }

    /*
    //Guess too high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📈 Too High"
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game"
            document.querySelector('.score').textContent = 0
        }
    }

    //Guess too low
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📉 Too Low"
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game"
            document.querySelector('.score').textContent = 0
        }
    }
    */

    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = "👏 Well Done"
        displayMessage("👏 Well Done")
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.widht = '30rem'
        if (highScore <= score) {
            document.querySelector('.highscore').textContent = score
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20
    // document.querySelector('.message').textContent = "Start guessing..." 
    displayMessage("Start guessing...")
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.widht = '15rem'
})