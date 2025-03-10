document.addEventListener("DOMContentLoaded", function () {
  var Countdown = {
    $el: document.querySelector(".countdown"),
    countdown_interval: null,
    total_seconds: 0,

    init: function () {
      this.$ = {
        hours: this.$el.querySelectorAll(".bloc-time.hours .figure"),
        minutes: this.$el.querySelectorAll(".bloc-time.min .figure"),
        seconds: this.$el.querySelectorAll(".bloc-time.sec .figure"),
      };

      this.values = {
        hours: parseInt(this.$.hours[0].parentElement.dataset.initValue, 10),
        minutes: parseInt(this.$.minutes[0].parentElement.dataset.initValue, 10),
        seconds: parseInt(this.$.seconds[0].parentElement.dataset.initValue, 10),
      };

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

      // Додаємо плавну зміну цифр
      elements[0].classList.add("flip");
      elements[1].classList.add("flip");

      setTimeout(() => {
        elements[0].textContent = valStr[0];
        elements[1].textContent = valStr[1];

        elements[0].classList.remove("flip");
        elements[1].classList.remove("flip");
      }, 300);
    },
  };

  Countdown.init();
});
