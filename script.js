document.addEventListener("DOMContentLoaded", function () {
    function startCountdown(hours, minutes, seconds) {
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        function updateCountdown() {
            if (totalSeconds <= 0) {
                clearInterval(timer);
                return;
            }

            totalSeconds--;

            let hrs = Math.floor(totalSeconds / 3600);
            let mins = Math.floor((totalSeconds % 3600) / 60);
            let secs = totalSeconds % 60;

            updateDisplay(hrs, ".bloc-time.hours .figure");
            updateDisplay(mins, ".bloc-time.minutes .figure");
            updateDisplay(secs, ".bloc-time.seconds .figure");
        }

        function updateDisplay(value, selector) {
            let elements = document.querySelectorAll(selector);
            let strValue = value.toString().padStart(2, "0");
            elements[0].textContent = strValue[0];
            elements[1].textContent = strValue[1];
        }

        let timer = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    startCountdown(12, 30, 15); // Початковий час: 12 годин, 30 хвилин, 15 секунд
});
