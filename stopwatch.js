document.addEventListener('DOMContentLoaded', () => {
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let isRunning = false;
    let interval;

    const displayMinutes = document.getElementById('minutes');
    const displaySeconds = document.getElementById('seconds');
    const displayMilliseconds = document.getElementById('milliseconds');

    function updateDisplay() {
        displayMinutes.textContent = String(minutes).padStart(2, '0');
        displaySeconds.textContent = String(seconds).padStart(2, '0');
        displayMilliseconds.textContent = String(milliseconds).padStart(2, '0');
    }

    function startStopwatch() {
        if (isRunning) return;

        isRunning = true;
        interval = setInterval(() => {
            milliseconds++;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }

    function stopStopwatch() {
        if (!isRunning) return;

        isRunning = false;
        clearInterval(interval);
    }

    function resetStopwatch() {
        stopStopwatch();
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        updateDisplay();
    }

    document.getElementById('start').addEventListener('click', startStopwatch);
    document.getElementById('stop').addEventListener('click', stopStopwatch);
    document.getElementById('reset').addEventListener('click', resetStopwatch);

    // Initialize display
    updateDisplay();
});
