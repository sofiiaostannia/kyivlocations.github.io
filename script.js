function startCountdown() {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 12);
    targetTime.setMinutes(targetTime.getMinutes() + 30);
    targetTime.setSeconds(targetTime.getSeconds() + 0);

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetTime - now;

        if (timeDifference <= 0) {
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            clearInterval(interval);
            return;
        }

        const hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, "0");
        const minutes = String(Math.floor((timeDifference / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((timeDifference / 1000) % 60)).padStart(2, "0");

        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

startCountdown();
