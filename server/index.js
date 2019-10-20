const express = require('express');
const next = require('next');
const jsonServer = require('json-server');
const path = require('path');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
// next
const app = next({ dev });
const handle = app.getRequestHandler();
const appRouter = (req, res) => handle(req, res);
// json-server
const apiMiddlewares = jsonServer.defaults();
const apiRouter = jsonServer.router(path.join(__dirname, 'db.json'));

app.prepare().then(() => {
  const server = express();

  // apiRouter overrides root url, so we specify here to use appRouter instead 🌝
  server.get('/', appRouter);
  // JSON server
  server.use(apiMiddlewares);
  server.use('/api', apiRouter);
  // next routes
  server.get('*', appRouter);

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
