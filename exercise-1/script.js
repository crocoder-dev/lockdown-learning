const date = new Date();

document.title = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${document.title}`;

const datetimeElement = document.querySelector('.datetime');

datetimeElement.textContent = date;

const platformElement = document.createElement('img');

if(navigator.platform === 'Win32') {
  platformElement.src = './images/Windows.png';
} else if (navigator.platform === 'MacIntel') {
  platformElement.src = './images/Apple.png';
} else if (navigator.platform === 'Linux x86_64') {
  platformElement.src = './images/Linux.png';
}

const languageElement = document.createElement('div');

languageElement.textContent = navigator.language;

const sizeElement = document.createElement('div');

sizeElement.textContent = `${window.innerWidth}x${window.innerHeight}`;

const helloElement = document.createElement('div');

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('name')) {
  helloElement.textContent = `Hello my name is ${urlParams.get('name')}!`;
} else {
  helloElement.textContent = 'Hello World!';
}

const linkElement = document.createElement('a');

linkElement.href = '?name=Stephen';
linkElement.textContent = 'Set your name to Stephen!';

let theme = localStorage.getItem('theme');
if(!theme) {
  localStorage.setItem('theme', 'light');
}

if(theme === 'light') {
  document.body.style.background = 'white';
  document.body.style.color = 'black';
} else {
  document.body.style.background = 'black';
  document.body.style.color = 'white';
}

document.body.appendChild(helloElement);
document.body.appendChild(platformElement);
document.body.appendChild(languageElement);
document.body.appendChild(sizeElement);
document.body.appendChild(linkElement);
document.body.appendChild(document.createElement('br'));
