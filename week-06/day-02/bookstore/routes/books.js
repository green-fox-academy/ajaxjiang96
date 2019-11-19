const connectionCreator = require('./db');

const booksQueryConstructor = (filters) => {
  console.log(filters);
  const queryString = `SELECT book_name as title,
  aut_name as author,
  cate_descrip as category,
  pub_name as publisher,
  book_price as price
FROM book_mast
  LEFT JOIN author ON book_mast.aut_id = author.aut_id
  LEFT JOIN category ON book_mast.cate_id = category.cate_id
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id`;

  if (filters && filters.length) {
    const conditions = filters.map((key) => {
      switch (key) {
        case 'category':
          return 'cate_descrip = ?';
        case 'publisher':
          return 'pub_name = ?';
        case 'plt':
          return 'book_price < ?';
        case 'pgt':
          return 'book_price > ?';
        default:
          return null;
      }
    });
    return `${queryString} WHERE ${conditions.join(' and ')};`;
  }
  return `${queryString};`;
};

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
    try {
      const conn = await connectionCreator();
      const queryString = booksQueryConstructor(Object.keys(req.query));
      console.log(queryString);
      const books = await conn.query(queryString, Object.values(req.query));
      console.log(books);
      res.render('books', { books });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
