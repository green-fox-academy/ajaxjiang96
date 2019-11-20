const http = require('http');
const url = require('url');

const augmentRes = (res) => {
  res.status = (code = 200) => {
    res.statusCode = code;
    return res;
  };

  res.sendStatus = (code = 200) => {
    res.statusCode = code;
    res.end();
  };

  res.set = (key, val) => {
    res.setHeader(key, val);
  };

  res.send = (content) => {
    res.end(content);
  };

  res.json = (content) => {
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(content));
  };
};

class App {
  constructor() {
    this.requestHandler = this.requestHandler.bind(this);

    this.middleWares = [];
    this.routes = {};
    this.server = http.createServer(this.requestHandler);
  }

  async requestHandler(req, res) {
    try {
      const processedReq = await this.applyMiddleWare(req);

      const parsedUrl = url.parse(req.url);
      req.query = parsedUrl.query;

      augmentRes(res);

      if (parsedUrl.pathname in this.routes) {
        if (processedReq.method in this.routes[parsedUrl.pathname]) {
          this.routes[parsedUrl.pathname][processedReq.method](processedReq, res);
        } else {
          throw new Error('method');
        }
      } else if (this.routes['*'] && this.routes['*'].GET) {
        this.routes['*'].GET(processedReq, res);
      } else {
        throw new Error('not found');
      }
    } catch (error) {
      switch (error.message) {
        case 'bad request':
          res.statusCode = 400;
          break;
        case 'not found':
          res.statusCode = 404;
          break;
        case 'method':
          res.statusCode = 405;
          break;
        default:
          console.error(error);
          res.statusCode = 500;
      }
      res.end();
    }
  }

  async applyMiddleWare(req) {
    const middleWareQueue = [];
    for (let i = 0; i < this.middleWares.length; i += 1) {
      middleWareQueue.push(this.middleWares[i](req));
    }
    const result = await Promise.all(middleWareQueue);
    let processedReq = {};
    result.forEach((processed) => {
      processedReq = {
        ...processedReq,
        ...processed,
      };
    });
    return processedReq;
  }

  use(middleWare) {
    this.middleWares.push(middleWare);
  }

  get(path, callback) {
    this.routes = {
      ...this.routes,
      [path]: {
        GET: callback,
      },
    };
    console.log(this.routes);
  }

  post(path, callback) {
    this.routes = {
      ...this.routes,
      [path]: {
        POST: callback,
      },
    };
    console.log(this.routes);
  }

  listen(port, callback) {
    this.server.listen(port, '127.0.0.1', callback);
  }
}

const fakeExpress = () => new App();

fakeExpress.json = () => async (req) => new Promise((resolve, reject) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    const copy = { ...req };
    let body = '';
    req.on('data', (byte) => { body += byte; });
    req.on('end', () => {
      try {
        copy.body = body ? JSON.parse(body) : undefined;
        resolve(copy);
      } catch (err) {
        reject(err);
      }
    });
  } else {
    resolve(req);
  }
});

fakeExpress.logger = () => async (req) => new Promise((resolve) => {
  const reqUrl = url.parse(req.url);
  const copy = { ...req };
  console.log((new Date()).toISOString(), `[${req.method}]`, reqUrl.pathname);
  resolve(copy);
});

module.exports = fakeExpress;
