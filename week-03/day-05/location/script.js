'use strict';

const URL = 'http://api.ipapi.com/';
const mapApiKey = 'AIzaSyAS-HpV459V-m1VsG_Zkbt2sdTeZpF9nOA';
const ipApiKey = 'b381dfc2464e0e230fcf2b51a7a3e086';

window.addEventListener('load', () => {
  const resultDiv = document.querySelector('.result');
  resultDiv.innerHTML = `<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${mapApiKey}&q=Space+Needle,Seattle+WA" allowfullscreen />`;
  const keyWordInput = document.querySelector('input#name');
  const form = document.querySelector('#search');

  keyWordInput.addEventListener('focus', () => { keyWordInput.value = ''; });

  form.onsubmit = (e) => {
    e.preventDefault();
    fetch(`${URL}${keyWordInput.value}?access_key=${ipApiKey}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        document.querySelector('iframe').setAttribute('src', `https://www.google.com/maps/embed/v1/place?key=${mapApiKey}&q=${res.region_name.split(' ').join('+')}`);
      })
      .catch((err) => console.error(err));
  };
});
