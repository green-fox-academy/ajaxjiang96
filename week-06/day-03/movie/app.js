const http = require('http');
const url = require('url');

const PORT = 3000;
const HOST = '127.0.0.1';

const movies = [];
let idCounter = 0;

const methodNotAllowed = (req, res) => {
  res.statusCode = 405;
  res.end();
};

const bodyParser = async (req) => new Promise((resolve, reject) => {
  let body = '';
  req.on('data', (byte) => { body += byte; });
  req.on('end', () => {
    try {
      resolve(JSON.parse(body));
    } catch (err) {
      reject(err);
    }
  });
});

const getMovie = (req, res) => {
  console.log(req.params, movies);
  const { movieId } = req.params;
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  const result = movies.find((movie) => movie.id === movieId);
  console.log(result)
  res.statusCode = result ? 200 : 404;
  res.end(JSON.stringify(result));
};

const getMovies = (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  const filteredMovies = movies.filter((movie) => {
    const { genre, title } = req.query;
    let titleMatch = true;
    let genreMatch = true;
    if (genre) genreMatch = genre === movie.genre;
    if (title) titleMatch = title === movie.title;
    return titleMatch && genreMatch;
  });
  res.end(JSON.stringify(filteredMovies));
};

const createMovie = async (req, res) => {
  if (req.headers.authorization !== 'top-secret') throw new Error('permission');

  try {
    const body = await bodyParser(req);
    console.log(body);
    if (!body.title) {
      throw new Error('bad request');
    } else if (movies.findIndex((movie) => movie.title === body.title) >= 0) {
      throw new Error('duplicate');
    } else {
      idCounter += 1;
      movies.push({
        id: idCounter,
        ...body,
        genre: body.genre || 'unknown',
      });
      res.statusCode = 201;
    }
  } catch (err) {
    switch (err.message) {
      case 'duplicate':
        res.statusCode = 409;
        break;
      case 'permission':
        res.statusCode = 403;
        break;
      default:
        res.statusCode = 400;
    }
  }
  res.end();
};

const requestHandler = (req, res) => {
  const reqUrl = url.parse(req.url, true);
  // console.log(reqUrl);
  req.query = reqUrl.query;
  console.log(`${req.method} ${reqUrl.pathname}${reqUrl.search || ''}`);
  switch (`/${reqUrl.pathname.split('/')[1]}`) {
    case '/':
      res.statusCode = 200;
      res.end();
      break;
    case '/movies':
      if (req.method === 'POST') {
        createMovie(req, res);
      } else if (req.method === 'GET') {
        const urlTokens = reqUrl.pathname.split('/');
        if (urlTokens.length > 2) {
          const movieId = parseInt(urlTokens[2], 10);
          req.params = {
            movieId,
          };
          getMovie(req, res);
        } else {
          getMovies(req, res);
        }
      } else {
        methodNotAllowed(req, res);
      }
      break;
    default:
      res.statusCode = 404;
      res.end();
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST, () => {
  console.log(`App listening on ${HOST}:${PORT}`);
});
