const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startBtn: document.querySelector('[data-action=start]'),
    stopBtn: document.querySelector('[data-action=stop]'),
    body: document.querySelector('body'),
}

 
function switchColor() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

function startSwitchColor() {
  switchColor();
  
  intervalId = setInterval(switchColor, 1000);
  
  refs.startBtn.setAttribute('disabled', true)
    
}


function stopSwitchColor() {
    clearInterval(intervalId)
    refs.startBtn.removeAttribute('disabled');
}

    
refs.startBtn.addEventListener('click', startSwitchColor)
refs.stopBtn.addEventListener('click', stopSwitchColor)
