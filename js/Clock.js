let is24Hour = true;

const clockEl = document.getElementById('clock');
const toggleBtn = document.getElementById('toggleFormat');

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let suffix = '';

  if (!is24Hour) {
    suffix = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12;
  }

  const timeString =
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') +
    suffix;

  clockEl.textContent = timeString;
}

function updateButtonText() {
  toggleBtn.textContent = is24Hour
    ? 'Switch to 12-hour clock'
    : 'Switch to 24-hour clock';
}

toggleBtn.addEventListener('click', () => {
  is24Hour = !is24Hour;
  updateButtonText();
  updateClock();
});

// Initial run
updateButtonText();
updateClock();
setInterval(updateClock, 1000);
