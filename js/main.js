const display = document.getElementById("timer-display");

let remainingSeconds = 0;
let intervalId = null;

function updateDisplay() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  display.textContent =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");
}
const minutesInput = document.getElementById("minutes-input");
const startButton = document.getElementById("start-timer");

startButton.addEventListener("click", () => {
  const minutes = Number(minutesInput.value);

  if (!minutes || minutes <= 0) {
    alert("Please enter a valid number of minutes");
    return;
  }

  remainingSeconds = minutes * 60;
  updateDisplay();
  startCountdown ()
});



function startCountdown() {
  if (intervalId !== null) return;
minutesInput.disabled = true;
startButton.disabled = true;

  intervalId = setInterval(() => {
    remainingSeconds--;

    if (remainingSeconds <= 0) {
    minutesInput.disabled = false;
    startButton.disabled = false;
      clearInterval(intervalId);
      intervalId = null;
      remainingSeconds = 0;
      alert("Time’s up!");
    }

    updateDisplay();
  }, 1000);
}
