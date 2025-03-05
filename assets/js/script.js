
/**General Variables */
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('.time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = hitPosition + 1
        }
    })
})
function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000


    )
}

moveMole()
