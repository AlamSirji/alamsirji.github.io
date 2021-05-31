const aimDate = new Date("05/07/2024");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const msEl = document.getElementById("ms");

// Initial Printing of Date
printDate();

// Permanent Printing
setInterval(printDate, 1);

function printDate() {
    let diff = aimDate - new Date();
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(diff / (1000 * 60) % 60);
    let seconds = Math.floor(diff / (1000) % 60);
    daysEl.innerHTML = format(days);
    hoursEl.innerHTML = format(hours);
    minutesEl.innerHTML = format(minutes);
    secondsEl.innerHTML = format(seconds);
    msEl.innerHTML = format(diff);
}

function format(text) {
    return (text >= 10) ? text : `0${text}`;
}