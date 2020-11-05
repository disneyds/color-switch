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


function selectColor(colorsArr) {
    const rundomIndex = randomIntegerFromInterval(0, 5);
    refs.body.style.backgroundColor = colorsArr[rundomIndex]
 
}
 

function switchColor() {
    intervalId = setInterval(() => {
    let rundomIndex = randomIntegerFromInterval(0, 5);
    refs.body.style.backgroundColor = colors[rundomIndex];
    
   
    }, 1000);
    refs.startBtn.setAttribute('disabled', true)
    return intervalId;
}


function stopSwitchColor() {
    clearInterval(intervalId)
    refs.startBtn.removeAttribute('disabled');
}

    
refs.startBtn.addEventListener('click', switchColor)
refs.stopBtn.addEventListener('click', stopSwitchColor)
