const refs = {
  btnStartEl: document.querySelector('button[data-start]'),
  btnStopEl: document.querySelector('button[data-stop]'),
  bodyEl: document.body,
};
let intervalId = null;

refs.btnStopEl.setAttribute('disabled', true);

refs.btnStartEl.addEventListener('click', () => {
  intervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (refs.btnStopEl.hasAttribute('disabled')) {
    refs.btnStopEl.removeAttribute('disabled');
    refs.btnStartEl.setAttribute('disabled', true);
  }
});

refs.btnStopEl.addEventListener('click', () => {
  clearInterval(intervalId);
  if (refs.btnStartEl.hasAttribute('disabled')) {
    refs.btnStartEl.removeAttribute('disabled');
    refs.btnStopEl.setAttribute('disabled', true);
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
