const countdown = document.querySelector('.countdown')

const deadline = new Date(2023,1,25,12,00,00)

const current = new Date()

// Create days, hours, minutes, seconds using the date object
const diff = deadline - current
const days = Math.floor(diff / (1000 * 60 * 60 * 24))
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
const minutes = Math.floor((diff / 1000 * 60) % 60)
const seconds = Math.floor((diff / 1000) % 60)

// Insert days, hours, minutes, seconds into the DOM
countdown.innerHTML = `
    <div>${days}</div>
    <div>${hours}</div>
    <div>${minutes}</div>
    <div>${seconds}</div>
`


