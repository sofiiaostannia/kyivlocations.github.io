function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;
    
    function updateTimer() {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        if (timer > 0) {
            timer--;
            setTimeout(updateTimer, 1000);
        }
    }

    updateTimer();
}

// Запускаємо таймер (наприклад, на 2 години)
startCountdown(2 * 3600);
