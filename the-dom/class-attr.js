const image = documenty.querySelector('.picture');

console.log(image.classList);

image.classList.add('big');

image.classList.remove('big');

image.classList.toggle('no-show');

image.classList.contains('no-show');

image.src = 'https://crocoder.dev/logo.png';

image.alt = 'crocoder-logo';

image.setAttribute('crocodile', 'awesome');

image.getAttribute('crocodile');

image.setAttribute('data-name', 'David');

console.log(image.dataSet);