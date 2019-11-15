const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const { input } = req.query;
  const parsed = parseInt(input, 10);
  if (!Number.isNaN(parsed)) {
    res.json({
      received: parseInt(parsed, 10),
      result: parsed * 2,
    });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }
});

app.get('/greeter', (req, res) => {
  const { name, title } = req.query;
  if (name && title) {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
    });
  } else if (name) {
    res.json({
      error: 'Please provide a title!',
    });
  } else if (title) {
    res.json({
      error: 'Please provide a name!',
    });
  } else {
    res.json({
      error: 'Please provide a name and a title!',
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  res.json({
    appended: `${req.params.appendable}a`,
  });
});

app.post('/dountil/:action', (req, res) => {
  const { until } = req.body;
  const { action } = req.params;
  let result;
  switch (action) {
    case 'sum':
      result = 0;
      for (let i = 1; i <= until; i += 1) {
        result += i;
      }
      res.json({
        result,
      });
      break;
    case 'factor':
      result = 1;
      for (let i = 1; i <= until; i += 1) {
        result *= i;
      }
      res.json({
        result,
      });
      break;
    default:
      if (until !== 0 && !until) {
        res.json({
          error: 'Please provide a number!',
        });
      } else {
        res.json({
          error: 'Please provide a action!',
        });
      }
  }
});

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
