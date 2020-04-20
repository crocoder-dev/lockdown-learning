function deletePerson(event) {
  const tableElement = document.querySelector('#table > tbody');
  tableElement.removeChild(event.target.parentElement.parentElement)
}

function createNewPerson() {

  const nameElement = document.querySelector('#name');
  const surnameElement = document.querySelector('#surname');
  const ageElement = document.querySelector('#age');

  const trElement = document.createElement('tr');
  const nameTdElement = document.createElement('td');
  const surnameTdElement = document.createElement('td');
  const ageTdElement = document.createElement('td');
  const removeTdElement = document.createElement('td');

  nameTdElement.textContent = nameElement.value;
  surnameTdElement.textContent = surnameElement.value;
  ageTdElement.textContent = ageElement.value;

  const removeButtonElement = document.createElement('input');
  removeButtonElement.type = 'button';
  removeButtonElement.value = 'remove';
  removeButtonElement.onclick = deletePerson;

  removeTdElement.appendChild(removeButtonElement);


  trElement.appendChild(nameTdElement);
  trElement.appendChild(surnameTdElement);
  trElement.appendChild(ageTdElement);
  trElement.appendChild(removeTdElement);

  const tableElement = document.querySelector('#table > tbody');
  const createNewPersonElement = document.querySelector('#create-new-person');

  tableElement.insertBefore(trElement, createNewPersonElement);

}


const commitElement = document.querySelector('#commit');
commitElement.onclick = createNewPerson;
>>>>>>> development
