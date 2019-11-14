const express = require('express');
const { cocktails, alcoholList } = require('./data');

const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  const { alcohol } = req.query;
  res.render('cocktails', {
    cocktails,
    alcoholList,
    alcohol,
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
