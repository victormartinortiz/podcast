// server.js
const { createServer } = require('http');
const next = require('next');
const { join } = require('path');
const { parse } = require('url');
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const port = process.env.PORT || 3000;

// Without express

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname);

      app.serveStatic(req, res, filePath);
    } else {
      handler(req, res, parsedUrl);
    }
  }).listen(port);
});
