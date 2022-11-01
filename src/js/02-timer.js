import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    dataDays:document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
}

refs.startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
    } else {
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(refs.inputDate, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = (value) => value.toString().padStart(2, "0");

refs.startBtn.addEventListener("click", () => {
  const timerId = setInterval(() => {
    const timeDown = new Date(refs.inputDate.value) - new Date();
      refs.startBtn.setAttribute('disabled', true);

    if (timeDown >= 0) {
      let time = convertMs(timeDown);
      refs.dataDays.textContent = addLeadingZero(time.days);
      refs.dataHours.textContent = addLeadingZero(time.hours);
      refs.dataMinutes.textContent = addLeadingZero(time.minutes);
      refs.dataSeconds.textContent = addLeadingZero(time.seconds);

    } else {
      Notiflix.Notify.success("Countdown finished");
      clearInterval(timerId);
    }
  }, 1000);
});