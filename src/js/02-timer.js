import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const elements = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

elements.btnStart.addEventListener('click', onBtnClick);
elements.btnStart.disabled = true;

let futureDate;

function onBtnClick() {
  elements.btnStart.disabled = true;
  const timerId = setInterval(() => {
    timeLeft = futureDate - new Date();
    if (timeLeft > 0) {
      const { days, hours, minutes, seconds } = convertMs(timeLeft);

      elements.days.textContent = addLeadingZero(days);
      elements.hours.textContent = addLeadingZero(hours);
      elements.minutes.textContent = addLeadingZero(minutes);
      elements.seconds.textContent = addLeadingZero(seconds);
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      window.alert('Please choose a date in the future');
      elements.btnStart.disabled = true;
    }
    elements.btnStart.disabled = false;
    futureDate = selectedDates[0].getTime();
  },
};

function addLeadingZero(item) {
  return String(item).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', options);
