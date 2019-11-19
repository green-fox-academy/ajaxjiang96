require('dotenv').config();
const express = require('express');
const multer = require('multer');

const books = require('./routes/books');
const users = require('./routes/users');

const upload = multer({ storage: multer.memoryStorage() });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/books/title', books.getBookTitles);
app.get('/books', books.getBooks);

app.get('/users', users.userPage);
app.post('/users', upload.single('csv'), users.insertUsers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
