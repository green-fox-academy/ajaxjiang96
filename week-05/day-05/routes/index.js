const { sith } = require('./sith');
const { translate } = require('./translate');

module.exports = {
  doubling: (req, res) => {
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
  },

  greeter: (req, res) => {
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
  },

  appenda: (req, res) => {
    res.json({
      appended: `${req.params.appendable}a`,
    });
  },

  doUntil: (req, res) => {
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
  },

  arrays: (req, res) => {
    console.log('fwefw')
    const { what, numbers } = req.body;
    if (!what || !numbers || !numbers.length) {
      res.send({
        error: 'Please provide what to do with the numbers!',
      });
      return;
    }
    let result;
    switch (what) {
      case 'sum':
        result = numbers.reduce((prev, curr) => prev + curr);
        break;
      case 'multiply':
        result = numbers.reduce((prev, curr) => prev * curr);
        break;
      case 'double':
        result = numbers.map((value) => value * 2);
        break;
      default:
        res.send({
          error: 'Please provide what to do with the numbers!',
        });
        return;
    }
    res.send({
      result,
    });
  },

  sith,
  translate,
};
