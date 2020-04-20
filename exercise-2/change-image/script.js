function addNewImage() {
  const imageElement = document.createElement('img');
  const rand = Math.floor((Math.random() * 400) + 100);
  imageElement.src = `https://source.unsplash.com/random/${rand}x${rand}`;
  imageElement.onmouseenter = changeSize;
  document.body.appendChild(imageElement);
}

function changeSize(event) {
  const rand = Math.floor((Math.random() * 400) + 100);
  event.target.src = `https://source.unsplash.com/random/${rand}x${rand}`;
}

addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
addNewImage();
>>>>>>> development
