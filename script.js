document.addEventListener("DOMContentLoaded", function () {
    var countdownElement = document.querySelector(".countdown");
    
    if (!countdownElement) {
        console.error("Countdown element not found!");
        return;
    }

    var Countdown = {
        $: {
            hours: countdownElement.querySelectorAll(".bloc-time.hours .figure"),
            minutes: countdownElement.querySelectorAll(".bloc-time.min .figure"),
            seconds: countdownElement.querySelectorAll(".bloc-time.sec .figure"),
        },

        values: {
            hours: parseInt(countdownElement.querySelector(".bloc-time.hours").dataset.initValue, 10),
            minutes: parseInt(countdownElement.querySelector(".bloc-time.min").dataset.initValue, 10),
            seconds: parseInt(countdownElement.querySelector(".bloc-time.sec").dataset.initValue, 10),
        },

        total_seconds: 0,
        countdown_interval: null,

        init: function () {
            this.total_seconds =
                this.values.hours * 3600 + this.values.minutes * 60 + this.values.seconds;

            this.count();
        },

        count: function () {
            var that = this;

            this.countdown_interval = setInterval(function () {
                if (that.total_seconds > 0) {
                    that.values.seconds--;

                    if (that.values.seconds < 0) {
                        that.values.seconds = 59;
                        that.values.minutes--;
                    }

                    if (that.values.minutes < 0) {
                        that.values.minutes = 59;
                        that.values.hours--;
                    }

                    that.updateDisplay();
                    that.total_seconds--;
                } else {
                    clearInterval(that.countdown_interval);
                }
            }, 1000);
        },

        updateDisplay: function () {
            this.updateFigures(this.values.hours, this.$.hours);
            this.updateFigures(this.values.minutes, this.$.minutes);
            this.updateFigures(this.values.seconds, this.$.seconds);
        },

        updateFigures: function (value, elements) {
            var valStr = value.toString().padStart(2, "0");
            elements[0].textContent = valStr[0];
            elements[1].textContent = valStr[1];
        },
    };

    Countdown.init();
});
