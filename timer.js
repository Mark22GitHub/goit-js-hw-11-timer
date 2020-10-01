class Timer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate.getTime();
    this.daysTimer = document.querySelector('[data-value="days"]');
    this.hoursTimer = document.querySelector('[data-value="hours"]');
    this.minutesTimer = document.querySelector('[data-value="mins"]');
    this.secondsTimer = document.querySelector('[data-value="secs"]');
  }
  expirationDate() {
    setInterval(() => {
      let distance = this.targetDate - this.currentTime();
      let day = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.daysTimer.textContent = `${day}`;
      this.hoursTimer.textContent = `${hours}`;
      this.minutesTimer.textContent = `${minutes}`;
      this.secondsTimer.textContent = `${seconds}`;

      if (distance < 0) {
        clearInterval(this.expirationDate);
        this.daysTimer.textContent = "00";
        this.hoursTimer.textContent = "00";
        this.minutesTimer.textContent = "00";
        this.secondsTimer.textContent = "00";
      }
    }, 1000);
  }
  currentTime() {
    return new Date().getTime();
  }
  init() {
    this.expirationDate();
  }
}

new Timer({
  selector: "#timer-1",
  targetDate: new Date("Nov 01, 2020"),
}).init();
