let currentImageId;
let result = 0;

function testResult(event) {
  if(event.target.id === currentImageId) {
    increasePoint();
  } else {
    increasePoint(-1);
  }
  getNewImage();
}

function increasePoint(value = 1) {
  const resultElement = document.querySelector('#result');
  result = result + value;
  resultElement.textContent = result;
}

function getNewImage() {
  const rand = Math.floor((Math.random() * 4) + 1);
  const imageElement = document.querySelector('#image');
  if(rand === 1) {
    currentImageId = 'head';
    imageElement.src = './images/head.png';
  } else if (rand === 2) {
    currentImageId = 'shoulders';
    imageElement.src = './images/shoulders.png';
  } else if (rand === 3) {
    currentImageId = 'knees';
    imageElement.src = './images/knees.png';
  } else {
    currentImageId = 'toes';
    imageElement.src = './images/toes.png';
  }
}

const headButtonElement = document.querySelector('#head');
const shouldersButtonElement = document.querySelector('#shoulders');
const kneesButtonElement = document.querySelector('#knees');
const toesButtonElement = document.querySelector('#toes');

headButtonElement.onclick = testResult;
shouldersButtonElement.onclick = testResult;
kneesButtonElement.onclick = testResult;
toesButtonElement.onclick = testResult;
getNewImage();