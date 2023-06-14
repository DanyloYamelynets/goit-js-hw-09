const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  colorsId = setInterval(onChangeColor, 1000);
}

function onStopClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(colorsId);
}

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
