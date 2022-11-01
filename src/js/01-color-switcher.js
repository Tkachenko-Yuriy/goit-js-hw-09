const refs = {
  btnStartEl: document.querySelector('button[data-start]'),
  btnStopEl: document.querySelector('button[data-stop]'),
  bodyEl: document.body,
}
let intervalId = null;

refs.btnStartEl.addEventListener('click',()=>{
   intervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();},1000)
    refs.btnStartEl.disabled = true;
})

refs.btnStopEl.addEventListener('click',()=> {
    clearInterval(intervalId)
    refs.btnStartEl.disabled = false;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}