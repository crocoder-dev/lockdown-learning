const url = 'http://localhost:3000/pokemon';

export async function createPokemon(data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  return await response.json();
}

export async function deletePokemon(id) {
  if (!id) {
    throw new Error('YOU SHOULD PASS ID');
  } 
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}