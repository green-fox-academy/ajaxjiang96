'use strict';

const apiKey = 'PHEGoMjOPZjnu3ytS23a60ZEF95hSd2a';
const URL = 'https://api.giphy.com/v1/gifs/search';

window.addEventListener('load', () => {
  function openImg(e) {
    console.log(e.target.dataset);
    document.querySelector('.result').innerHTML = '';
    const img = document.createElement('img');
    img.src = e.target.dataset.original;
    img.classList.add('original');
    document.querySelector('.result').appendChild(img);
  }
  function displayResult(data) {
    document.querySelector('.result').innerHTML = '';
    data.map((gif) => ({
      thumbnail: gif.images.downsized_still,
      original: gif.images.original,
    })).forEach((extracted) => {
      console.log(extracted);
      const element = document.createElement('img');
      element.src = extracted.thumbnail.url;
      element.dataset.original = extracted.original.url;
      element.onclick = (e) => openImg(e);
      element.classList.add('clickable');
      document.querySelector('.result').appendChild(element);
    });
  }

  const keyWordInput = document.querySelector('input#keyword');
  const form = document.querySelector('#searchForm');

  keyWordInput.addEventListener('focus', () => { keyWordInput.value = ''; });

  form.onsubmit = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    let formattedUrl = `${URL}?`;
    formattedUrl += `api_key=${apiKey}`;
    formattedUrl += `&q=${keyWordInput.value}`;
    formattedUrl += `&limit=${16}`;
    xhr.open('GET', formattedUrl);
    xhr.onload = () => {
      const res = JSON.parse(xhr.response);
      displayResult(res.data);
    };
    xhr.onerror = (err) => {
      console.error(err);
    };
    if (keyWordInput.value) xhr.send();
  };
});
