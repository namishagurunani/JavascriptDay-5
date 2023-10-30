let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stop');
let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');

let msec = 0; // Change '00' to 0
let secs = 0; // Change '00' to 0
let mins = 0; // Change '00' to 0

let timerId = null;

startBtn.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function() {
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    msec = 0; // Reset msec to 0
    secs = 0; // Reset secs to 0
    mins = 0; // Reset mins to 0
    updateTimerDisplay(); // Call the function to update the timer display
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    updateTimerDisplay(); // Call the function to update the timer display
}

function updateTimerDisplay() {
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
