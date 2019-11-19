require('dotenv').config();
const express = require('express');

const books = require('./routes/books');

const app = express();
app.use(express.json());
app.use('/static', express.static('static'));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/books/title', books.getBookTitles);
app.get('/books', books.getBooks);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
