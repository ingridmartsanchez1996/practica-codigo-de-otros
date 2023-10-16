//Codigo original
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// missing # which is used to specified a html class.
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
//Adding Location class
const $l = document.querySelector('#location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = response.data() // parse to json
  console.log(data);
  // Changing ' to ` so the fetched data is displayed in the ui.
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Missing $ in variable name.
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

