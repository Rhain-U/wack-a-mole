
/**General Variables */
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('.time-left')
const score = document.querySelector('.score')

let result = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

console.log(randomSquare)

randomSquare()

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}

moveMole()
