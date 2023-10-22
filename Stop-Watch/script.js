let timer;
let isRunning = false;
let lapStartTime = 0;
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapTimesElement = document.getElementById("lapTimes");

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        lapStartTime = lapStartTime || Date.now();
        timer = setInterval(updateTimer, 10);
    }
    startButton.disabled = true;
    stopButton.disabled = false;
    lapButton.disabled = false;
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
    startButton.disabled = false;
    stopButton.disabled = true;
    lapButton.disabled = true;
}

function resetTimer() {
    stopTimer();
    timerElement.textContent = "00:00:00";
    lapTimesElement.innerHTML = "";
    lapStartTime = 0;
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - lapStartTime);
    timerElement.textContent = elapsedTime.toISOString().substr(11, 8);
}

function lapTimer() {
    const lapTime = timerElement.textContent;
    const lapTimeElement = document.createElement("div");
    lapTimeElement.textContent = lapTime;
    lapTimesElement.appendChild(lapTimeElement);
    lapStartTime = new Date().getTime();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", lapTimer);
resetButton.click(); // Reset timer on page load
