const connectionCreator = require('./db');

const WINDOW_SIZE = 5;
const createUserTable = async () => {
  const dropTableQueryString = 'DROP TABLE IF EXISTS user;';
  const createTableQueryString = `CREATE TABLE user(
  user_id INTEGER PRIMARY KEY,
  prefix VARCHAR(16),
  first_name VARCHAR(32),
  last_name VARCHAR(32),
  address VARCHAR(32),
  height FLOAT DEFAULT NULL,
  bitcoin_address VARCHAR(50),
  color_preference VARCHAR(7)
);`;
  const conn = await connectionCreator();
  await conn.query(dropTableQueryString);
  return conn.query(createTableQueryString);
};

// const batchUpload(da) {

// }

module.exports = {
  userPage: async (req, res) => {
    const queryString = 'SELECT * FROM user';
    try {
      const conn = await connectionCreator();
      const users = await conn.query(queryString);
      return res.render('users', { users });
    } catch (err) {
      if (err.code && err.code === 'ER_NO_SUCH_TABLE') return res.render('users', { users: [] });
      return res.sendStatus(500);
    }
  },
  insertUsers: async (req, res) => {
    console.log('[users]: Upload users');
    if (!req.file) {
      console.error('[users]: ERROR: File missing');
      return res.sendStatus(400);
    }
    console.log(`[users]: Uploading from ${req.file.originalname}`);

    /* parse file */
    const data = req.file.buffer.toString('utf8').trim().split('\n');
    data.shift();

    /* initialize values */
    let startIndex = 0;
    await createUserTable();
    const conn = await connectionCreator();
    const queryString = 'INSERT INTO user VALUES';

    /* Batch Upload */
    while (startIndex < data.length) {
      const batch = data.slice(startIndex, startIndex + WINDOW_SIZE);
      const values = [];
      const queryRows = [];
      batch.forEach((row) => {
        const toBeInserted = row.split(',').map((value) => (value === '' ? undefined : value));
        values.push(...toBeInserted);
        queryRows.push(`(${Array(toBeInserted.length).fill('?').join(', ')})`);
      });
      const finalQueryString = `${queryString} ${queryRows.join(', ')};`;
      try {
        // eslint-disable-next-line no-await-in-loop
        await conn.query(finalQueryString, values);
      } catch (err) {
        console.error(`Batch ${Math.floor(startIndex / WINDOW_SIZE) + 1}`, finalQueryString, err);
        return res.sendStatus(400);
      }
      startIndex += WINDOW_SIZE;
    }
    console.log('[users]: Upload succeed');
    return res.redirect('/users');
  },
};
