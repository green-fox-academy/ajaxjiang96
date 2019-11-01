'use strict';

const apiKey = 'IOZIwri2WnpkSrYjT160TUFHLlhG50T3';
const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

window.addEventListener('load', () => {
  const result = document.querySelector('.result');
  function displayResult(res) {
    console.log(res);
    result.innerHTML = '';
    res.docs.forEach((article) => {
      const section = document.createElement('section');
      const headline = document.createElement('h1');
      headline.textContent = article.headline.main;
      const pubDate = document.createElement('p');
      pubDate.textContent = (new Date(article.pub_date)).toLocaleDateString();
      const snippet = document.createElement('p');
      snippet.textContent = article.snippet;
      section.appendChild(headline);
      section.appendChild(pubDate);
      section.appendChild(snippet);
      result.appendChild(section);
    });
  }
  const xhr = new XMLHttpRequest();
  let formattedUrl = `${URL}?`;
  formattedUrl += `api-key=${apiKey}`;
  formattedUrl += '&q=moon landing by Apollo 11';
  xhr.open('GET', formattedUrl);
  xhr.onload = () => {
    const res = JSON.parse(xhr.response);
    displayResult(res.response);
  };
  xhr.onerror = (err) => {
    console.error(err);
  };
  xhr.send();
});
