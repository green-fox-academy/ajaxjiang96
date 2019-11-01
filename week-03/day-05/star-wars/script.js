'use strict';

const URL = 'https://swapi.co/api/';

window.addEventListener('load', () => {
  let names = []
  const keyWordInput = document.querySelector('input#name');
  const form = document.querySelector('#search');
  let selectedNameI = -1;

  keyWordInput.addEventListener('focus', () => { keyWordInput.value = ''; });
  function renderMovies(result) {
    const movies = document.querySelector('.movies');
    movies.innerHTML = '';
    if (result.length) {
      result.forEach((movie) => {
        console.log(movie);
        const item = document.createElement('li');
        item.innerText = movie.title;
        movies.appendChild(item);
      });
    } else {
      movies.textContent = 'No matching record';
    }
  }

  function fetchMovies(movies, i) {
    const moviesElement = document.querySelector('.movies');
    moviesElement.innerHTML = 'Loading...';
    selectedNameI = i;
    renderNames(names);
    console.log(movies);
    Promise.all(
      movies.map((movie) => fetch(movie)),
    ).then((result) => {
      Promise.all(result.map(r => r.json()))
        .then((res) => renderMovies(res));
    });
  }

  function renderNames(result) {
    names = result;
    const namesElement = document.querySelector('.names');
    namesElement.innerHTML = '';
    if (result.length) {
      result.forEach((name, i) => {
        console.log(name);
        const item = document.createElement('li');
        item.innerText = name.name;
        item.onclick = () => fetchMovies(name.films, i);
        if (i === selectedNameI) item.classList.add('selected');
        namesElement.appendChild(item);
      });
    } else {
      namesElement.textContent = 'No matching record';
    }
  }
  form.onsubmit = (e) => {
    e.preventDefault();
    const namesElement = document.querySelector('.names');
    namesElement.innerHTML = 'Loading...';
    const moviesElement = document.querySelector('.movies');
    moviesElement.innerHTML = '';
    fetch(`${URL}people/?search=${keyWordInput.value}`)
      .then((res) => res.json())
      .then((res) => renderNames(res.results))
      .catch((err) => console.error(err));
  };
});
