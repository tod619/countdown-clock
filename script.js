const countdown = document.querySelector('.countdown')

const interval = setInterval(() => {
    const deadline = new Date(2023,1,25,12,00,00)

    const current = new Date()

    // Create days, hours, minutes, seconds using the date object
    const diff = deadline - current
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + ""
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + ""
    const minutes = Math.floor((diff / 1000 * 60) % 60) + ""
    const seconds = Math.floor((diff / 1000) % 60) + ""

    // Insert days, hours, minutes, seconds into the DOM
    countdown.innerHTML = `
        <div data-content="Days">${days.length === 1 ? `0${days}`: days}</div>
        <div data-content="Hours">${hours.length === 1 ? `0${hours}`: hours}</div>
        <div data-content="Minutes">${minutes.length === 1 ? `0${minutes}`: minutes}</div>
        <div data-content="Seconds">${seconds.length === 1 ? `0${seconds}`: seconds}</div>
    `
}, 1000)




