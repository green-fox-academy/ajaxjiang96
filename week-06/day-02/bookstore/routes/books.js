const connectionCreator = require('./db');

module.exports = {
  getBookTitles: async (req, res) => {
    const conn = await connectionCreator();
    const queryString = 'SELECT book_name as title FROM book_mast;';
    try {
      const books = await conn.query(queryString);
      res.render('book_titles', { books });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  getBooks: async (req, res) => {
    const conn = await connectionCreator();
    const queryString = `SELECT book_name as title,
  aut_name as author,
  cate_descrip as category,
  pub_name as publisher,
  book_price as price
FROM book_mast
  LEFT JOIN author ON book_mast.aut_id = author.aut_id
  LEFT JOIN category ON book_mast.cate_id = category.cate_id
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id;
`;
    try {
      const books = await conn.query(queryString);
      console.log(books);
      res.render('books', { books });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
