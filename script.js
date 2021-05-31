const aimDate = new Date("07/05/2024");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const msEl = document.getElementById("ms");

// Initial Printing of Date
printDate();
setInterval(printDate, 1);

function printDate() {
    let diff = aimDate - new Date();
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(diff / (1000 * 60) % 60);
    let seconds = Math.floor(diff / (1000) % 60);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    msEl.innerHTML = diff;
}