const fakeExpress = require('./fake-express');

const app = fakeExpress();

app.use(fakeExpress.json());
app.use(fakeExpress.logger());

const PORT = process.env.PORT || 3000;

app.get('/foot/:id?shit', console.log);

app.get('/my-endpoint', (req, res) => {
  res.sendStatus();
});

app.get('/my-endpoint', (req, res) => {
  res.sendStatus();
});

app.post('/echo', (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
