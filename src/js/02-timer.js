import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';
// import 'notiflix/dist/notiflix-3.2.4.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.addEventListener('click', startTimer);
refs.startBtn.disabled = true;

let futureDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkDate(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);

function checkDate(newDate) {
  if (futureDate) return;

  const currentDate = new Date();
  if (currentDate.getTime() >= newDate.getTime()) {
    Notify.failure('Please choose a date in the future');
    return;
  }

  refs.startBtn.disabled = false;
  futureDate = newDate;
}

function startTimer(event) {
  event.target.disabled = true;

  const intervalId = setInterval(() => {
    const timesDifferent = futureDate.getTime() - new Date().getTime();

    const time = convertMs(timesDifferent);

    Object.keys(time).forEach(key => (refs[key].textContent = addLeadingZero(time[key])));

    if (timesDifferent <= 0) {
      clearInterval(intervalId);
      Object.keys(time).forEach(key => (refs[key].textContent = '00'));
      return;
    }
  }, 1000);
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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}