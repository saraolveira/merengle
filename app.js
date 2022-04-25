import players from "./players.json" assert { type: "json" }
import answerList from "./answerList.json" assert { type: "json" }


// Get random player each day
const MILLISECONDS_TO_DAYS = 1000 * 60 * 60 * 24

const startDate = new Date(2022, 3, 1)
const msOffset = Date.now() - startDate
const dayOffset = msOffset / MILLISECONDS_TO_DAYS
const index = Math.floor(dayOffset)
const tomorrow = startDate.valueOf() + (index + 1) * MILLISECONDS_TO_DAYS;
const answerName = answerList[index]
const answer = players.find((player) => player.jerseyName === answerName)
let attempts = 1
let guesses = 7
let won = "no"
let lost = "no"

const today = new Date(new Date().setHours(0, 0, 0, 0));

const guessContainer = document.querySelector('.guess-container')
const timer = document.getElementById('timer')
const winBox = document.querySelector('.win')
const loseBox = document.querySelector('.lose')
const instructionsBox = document.querySelector('.instr')
let instructions = "no"
let darkMode = "off"
const statsBox = document.querySelector('.stats')
const played = document.getElementById('played')
const winpct = document.getElementById('winpct')
const streak = document.getElementById('streak')

loadLocalStorage()

// Local Storage
function preserveGameState() {
    window.localStorage.setItem('attempts', attempts)
    window.localStorage.setItem('guesses', guesses)
    window.localStorage.setItem('guessContainer', guessContainer.innerHTML)
    window.localStorage.setItem('today', today)
}

function updateGames() {
    const totalGames = window.localStorage.getItem('totalGames') || 0
    window.localStorage.setItem('totalGames', Number(totalGames) + 1)
}

function preserveWin() {
    window.localStorage.setItem('won', won)
    window.localStorage.setItem('winBox', winBox.innerHTML)

    const totalWins = window.localStorage.getItem('totalWins') || 0
    window.localStorage.setItem('totalWins', Number(totalWins) + 1)

    const currentStreak = window.localStorage.getItem('currentStreak') || 0
    window.localStorage.setItem('currentStreak', Number(currentStreak) + 1)
}

function preserveLose() {
    window.localStorage.setItem('lost', lost)
    window.localStorage.setItem('loseBox', loseBox.innerHTML)

    window.localStorage.setItem('currentStreak', 0)
}

function updateStats() {
    const totalGames = window.localStorage.getItem('totalGames') || 0
    const totalWins = window.localStorage.getItem('totalWins') || 0
    const pct = Math.round((totalWins/totalGames) * 100) || 0
    const currentStreak = window.localStorage.getItem('currentStreak') || 0

    played.innerHTML = totalGames
    winpct.innerHTML = `${pct}%`
    streak.innerHTML = currentStreak
}

function preserveInstructions() {
    window.localStorage.setItem('instructions', instructions)
}

function preserveDarkMode() {
    window.localStorage.setItem('darkMode', darkMode)
}

function loadLocalStorage() {
    let storedToday = window.localStorage.getItem('today')
    if (storedToday != today) {
        localStorage.removeItem('attempts')
        localStorage.removeItem('guesses')
        localStorage.removeItem('won')
        localStorage.removeItem('lost')
        localStorage.removeItem('today')
        localStorage.removeItem('guessContainer')
        localStorage.removeItem('winBox')
        localStorage.removeItem('loseBox')
    }

    attempts = Number(window.localStorage.getItem('attempts')) || attempts
    guesses = Number(window.localStorage.getItem('guesses')) || guesses
    won = window.localStorage.getItem('won')
    lost = window.localStorage.getItem('lost')

    const storedGuessContainer = window.localStorage.getItem('guessContainer')
    if (guessContainer) {
        guessContainer.innerHTML = storedGuessContainer
    }

    const storedWinBox = window.localStorage.getItem('winBox')
    winBox.innerHTML = storedWinBox

    const storedLoseBox = window.localStorage.getItem('loseBox')
    loseBox.innerHTML = storedLoseBox
    
    let isRead = window.localStorage.getItem('instructions')
    if (isRead === "read") {
        instructionsBox.style.display = "none"
    }

    let isDark = window.localStorage.getItem('darkMode')
    if (isDark === "on") {
        document.documentElement.style.setProperty('--whitish', "#2f2f2f")
        guessContainer.style.color = "#f7f7f7"
        statsBox.style.color = "#f7f7f7"
        instructionsBox.style.color = "#f7f7f7"
        winBox.style.color = "#f7f7f7"
        loseBox.style.color = "#f7f7f7"
    }


    const totalGames = window.localStorage.getItem('totalGames') || 0
    const totalWins = window.localStorage.getItem('totalWins') || 0
    const pct = Math.round((totalWins/totalGames) * 100) || 0
    const currentStreak = window.localStorage.getItem('currentStreak') || 0

    played.innerHTML = totalGames
    winpct.innerHTML = `${pct}%`
    streak.innerHTML = currentStreak
}

// Dark mode
const lightButton = document.querySelector('.light-button')

lightButton.addEventListener('click', () => {
    if (darkMode === "off") {
        darkMode = "on"
        document.documentElement.style.setProperty('--whitish', "#2f2f2f")
        guessContainer.style.color = "#f7f7f7"
        statsBox.style.color = "#f7f7f7"
        instructionsBox.style.color = "#f7f7f7"
        winBox.style.color = "#f7f7f7"
        loseBox.style.color = "#f7f7f7"
    } else {
        darkMode = "off"
        document.documentElement.style.setProperty('--whitish', "#f7f7f7")
        guessContainer.style.color = "#000000"
        statsBox.style.color = "#000000"
        instructionsBox.style.color = "#000000"
        winBox.style.color = "#000000"
        loseBox.style.color = "#000000"
    }

    preserveDarkMode()
})

// Instructions
const instructionsClose = document.querySelector('.instr-close')

if (instructionsClose) {
    instructionsClose.addEventListener('click', () => {
        instructionsBox.style.display = "none"
        instructions = "read"
        preserveInstructions()
    })
}

const infoBTN = document.querySelector('.info-button')
infoBTN.addEventListener('click', () => {
    instructionsBox.style.display = "flex"
})

// Language
const es = document.querySelector('.es')
const en = document.querySelector('.en')
const english = document.querySelector('.english')
const spanish = document.querySelector('.spanish')

if(english) {
    english.addEventListener('click', () => {
        en.style.display = "flex"
        es.style.display = "none"
    })
}

if(spanish) {
    spanish.addEventListener('click', () => {
        es.style.display = "flex"
        en.style.display = "none"
    })
}

// Stats

const statsBTN = document.querySelector('.stats-button')
statsBTN.addEventListener('click', () => {
    statsBox.style.display = "flex"
})

const statsClose = document.querySelector('.stats-close')

statsClose.addEventListener('click', () => {
    statsBox.style.display = "none"
})

// Search players & autocomplete & guess

const search = document.querySelector('#hcraes')
const matchList = document.querySelector('.match-list')
search.placeholder = `Adivina... Tienes ${guesses} intentos`

let possibleGuesses

const searchPlayers = () => { 
    let matches = players.filter(player => {
        const regex = new RegExp(`^${search.value}`, 'gi')
        return player.name.match(regex) ||  player.spelling.match(regex) || player.jerseyName.match(regex) || player.lastName.match(regex)
    })
        
    if (search.value === "") {
        matches = []
        matchList.innerHTML = ''
        matchList.style.display = "none"
    }

    if (matches.length > 0) {
        const matchHTML = matches
            .map(
                match =>
                `<div class="match">${match.name}</div>`
            )
            .join('')

        matchList.innerHTML = matchHTML

        matchList.style.display = "block"
    }

    possibleGuesses = document.querySelectorAll('.match')
    const guessContainer = document.querySelector('.guess-container')

    possibleGuesses.forEach(possibleGuess => {
        possibleGuess.addEventListener('click', () => {
            matchList.innerHTML = ""
            matchList.style.display = "none"
            let guess = players.find((player) => player.name === possibleGuess.innerHTML)

            if (attempts === 1) {
                gtag ('event', 'game_started')
            }

            guessContainer.style.display = "block"
            guessContainer.innerHTML += `
            <div class="guess-row guess-row-${attempts}" id="guess${attempts}">
                <div class="jersey-name guess-box">${guess.jerseyName}</div>
                <div class="line"></div>
                <div class="team guess-box" id="team${attempts}">${guess.team}</div>
                <div class="line"></div>
                <div class="position guess-box" id="position${attempts}">${guess.position}</div>
                <div class="line"></div>
                <div class="number guess-box" id="number${attempts}">${guess.number}</div>
                <div class="line"></div>
                <div class="year guess-box" id="year${attempts}">${guess.year}</div>
                <div class="line"></div>
                <div class="country guess-box" id="country${attempts}">${guess.country}</div>
                <div class="line"></div>
                <div class="height guess-box" id="height${attempts}">${guess.height}cm</div>
            </div>    
            `

            let guessRow = document.querySelector('#guess'+attempts)
            guessRow.classList.add("guess-row-animation")

            let previousAttempt = attempts - 1
            let previousGuessRow = document.querySelector('#guess'+previousAttempt)
            if (previousGuessRow) {
                previousGuessRow.classList.remove("guess-row-animation")
            }
            setTimeout(function(){ guessRow.classList.remove("guess-row-animation") }, 500);
            let team = document.querySelector('#team'+attempts)
            let position = document.querySelector('#position'+attempts)
            let number = document.querySelector('#number'+attempts)
            let year = document.querySelector('#year'+attempts)
            let country = document.querySelector('#country'+attempts)
            let height = document.querySelector('#height'+attempts)

            if (guess.jerseyName === answer.jerseyName) {
                guessRow.classList.add('purple')
            }

            if (guess.team === answer.team) {
                team.classList.add('purple')
            }

            if (guess.position === answer.position) {
                position.classList.add('purple')
            }

            if (guess.position === answer.close[0]) {
                position.classList.add('yellow')
            } else if (guess.position === answer.close[1]) {
                position.classList.add('yellow')
            } if (guess.position === answer.close[2]) {
                position.classList.add('yellow')
            }

            if (guess.number === answer.number) {
                number.classList.add('purple')
            }

            if (guess.number === answer.number + 1 || guess.number === answer.number + 2 || guess.number === answer.number - 1 || guess.number === answer.number - 2) {
                number.classList.add('yellow')
            }

            if (guess.number > answer.number) {
                number.innerHTML += '<i class="arrow down"></i>'
            }

            if (guess.number < answer.number) {
                number.innerHTML += '<i class="arrow up"></i>'
            }

            if (guess.year === answer.year) {
                year.classList.add('purple')
            }

            if (guess.year === answer.year + 1 || guess.year === answer.year + 2 || guess.year === answer.year - 1 || guess.year === answer.year - 2) {
                year.classList.add('yellow')
            }

            if (guess.year > answer.year) {
                year.innerHTML += '<i class="arrow down"></i>'
            }

            if (guess.year < answer.year) {
                year.innerHTML += '<i class="arrow up"></i>'
            }

            if (guess.country === answer.country) {
                country.classList.add('purple')
            }

            if (guess.country === answer.near[0]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[1]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[2]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[3]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[4]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[5]) {
                country.classList.add('yellow')
            }

            if (guess.height === answer.height) {
                height.classList.add('purple')
            }

            if (guess.height === answer.height + 1 || guess.height === answer.height + 2 || guess.height === answer.height - 1 || guess.height === answer.height - 2) {
                height.classList.add('yellow')
            }

            if (guess.height > answer.height) {
                height.innerHTML += '<i class="arrow down"></i>'
            }

            if (guess.height < answer.height) {
                height.innerHTML += '<i class="arrow up"></i>'
            }

            attempts += 1
            guesses -= 1
            search.placeholder = `Te quedan ${guesses} intentos`
            search.value = ""

            checkGuess(guess)
            handleLose(guess)
            preserveGameState()
        })
    })
}

search.addEventListener('input', () => {
    searchPlayers(search.value)
})

// Handle enter key
search.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) {
        possibleGuesses[0].click()
    }
})

// Win & lose

function countdown() {
    setInterval(function() {

        const now = new Date().getTime()
    
        const timeLeft = tomorrow - now
    
        const hoursOne = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesOne = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const secondsOne = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }
    
        const hours = makeMeTwoDigits(hoursOne)
        const minutes = makeMeTwoDigits(minutesOne)
        const seconds = makeMeTwoDigits(secondsOne)
    
        document.getElementById("timer").innerHTML = "Vuelve en " + hours + ":" + minutes + ":" + seconds
        search.placeholder = `Vuelve en ${hours}:${minutes}:${seconds}`
    
        
    }, 1000);
}

// Win
const winClose = document.querySelector('.win-close')

if (winClose) {
    winClose.addEventListener('click', () => {
        winBox.style.display = "none"
    })
}

const checkGuess = guess => {
    if (guess.jerseyName === answer.jerseyName) {
        won = "si"
        search.disabled = true

        winBox.style.display = "flex"
        winBox.innerHTML = `
        <i class="fa-solid fa-xmark win-close"></i>
        <div class="win-text">¡Has ganado!</div>
        <div class="player">
            <div class="player-jersey">
                <svg width="512" height="380" viewBox="0 0 512 380" fill="none" xmlns="http://www.w3.org/2000/svg" class="jersey">
                <path d="M129.057 0.945068L3.51363 141.394C-1.23837 146.711 -1.16137 154.772 3.69063 159.997L58.5276 219.05C63.7376 224.66 72.5176 224.963 78.0996 219.723L129.057 171.894H141.366V0.945068H129.057Z" fill="white"/>
                <path d="M255.995 0.945068H129.057V365.245C129.057 372.873 135.24 379.056 142.868 379.056H369.13C376.758 379.056 382.941 372.873 382.941 365.245V0.945068H255.995Z" fill="white"/>
                <path d="M508.306 160.002L453.475 219.046C448.268 224.667 439.484 224.957 433.904 219.723L382.94 171.894H370.634V0.950066H382.94L508.485 141.398C513.236 146.716 513.167 154.768 508.306 160.002Z" fill="white"/>
                <path d="M255.995 0.945068V379.056H369.13C376.758 379.056 382.941 372.873 382.941 365.245V0.945068H255.995Z" fill="white"/>
                </svg>
            </div>

            <div class="win-text player-name">${answerName}</div>
            <div class="win-text player-number">${answer.number}</div>
        </div>
        <div class="win-text" id="timer"></div>
        <img src="${answer.image}" alt="${answerName}" class="win-img">
        `

        const closeBTN = document.querySelector('.win-close')

        closeBTN.addEventListener('click', () => {
            winBox.style.display = "none"
        })

        const now = new Date().getTime()

        const timeLeft = tomorrow - now
    
        const hoursOne = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesOne = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const secondsOne = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }
    
        const hours = makeMeTwoDigits(hoursOne)
        const minutes = makeMeTwoDigits(minutesOne)
        const seconds = makeMeTwoDigits(secondsOne)
    
        document.getElementById("timer").innerHTML = "Vuelve en " + hours + ":" + minutes + ":" + seconds
        search.placeholder = `Vuelve en ${hours}:${minutes}:${seconds}`

        countdown()
        preserveWin()
        updateGames()
        updateStats()

        gtag ('event', 'game_won', {
            'number_guesses' : attempts
        })
    }
    
}

// Lose
const loseClose = document.querySelector('.lose-close')

if (loseClose) {
    loseClose.addEventListener('click', () => {
        loseBox.style.display = "none"
    })
}

const handleLose = guess => {
    if (attempts > 7 && guess.jerseyName != answer.jerseyName) {
        lost = "si"
        search.disabled = true

        loseBox.style.display = "flex"
        loseBox.innerHTML += `
            <i class="fa-solid fa-xmark lose-close"></i>
            <div class="lose-text">Has perdido :(</div>
            <div class="lose-text" id="timer"></div>
        `

        const closeBTN = document.querySelector('.lose-close')

        closeBTN.addEventListener('click', () => {
            loseBox.style.display = "none"
        })

        const now = new Date().getTime()

        const timeLeft = tomorrow - now
    
        const hoursOne = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesOne = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const secondsOne = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }
    
        const hours = makeMeTwoDigits(hoursOne)
        const minutes = makeMeTwoDigits(minutesOne)
        const seconds = makeMeTwoDigits(secondsOne)
    
        document.getElementById("timer").innerHTML = "Vuelve en " + hours + ":" + minutes + ":" + seconds
        search.placeholder = `Vuelve en ${hours}:${minutes}:${seconds}`
        
        countdown()
        preserveLose()
        updateGames()
        updateStats()
        gtag ('event', 'game_lost')
    } 
}

if (won === "si") {
    search.disabled = true
    winBox.style.display = "flex"
    countdown()
}

if (lost === "si") {
    search.disabled = true
    loseBox.style.display = "flex"
    countdown()
}