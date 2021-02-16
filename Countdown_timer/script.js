let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer(sec) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + (sec * 1000)
  displayTimeLeft(sec);
  displayEndTime(then)
  countdown = setInterval(() => {
    const secLeft = Math.round((then - Date.now()) / 1000);

    if(secLeft === 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secLeft);
  }, 1000);
}

function displayTimeLeft(sec) {
  const min = Math.floor(sec / 60);
  const remainSec = sec % 60;
  const display = `${min}:${remainSec < 10 ? 0 : ''}${remainSec}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const min = end.getMinutes();
  endTime.textContent = `Be back at ${hour}: ${min < 10 ? 0 : ''}${min}`
}

function startTimer() {
  const sec = parseInt(this.dataset.time);
  timer(sec);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
