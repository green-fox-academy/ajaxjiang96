const express = require('express');
const { forecasts } = require('./data');

const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('dashboard', {
    forecasts,
  });
});

app.get('/cities/:city', (req, res) => {
  // render `home.ejs`
  const { city } = req.params;
  const weather = forecasts[forecasts.findIndex((forecast) => forecast.city === city)];
  res.render('city', {
    ...weather,
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
