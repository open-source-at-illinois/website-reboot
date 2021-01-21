require('dotenv').config();
const { SERVER_PORT, NODE_ENV } = process.env;

const express = require('express')
const next = require('next')

const port = SERVER_PORT || 3000;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.get('/announcements', (req, res) => {
    return app.render(req, res, '/announcements', req.query)
  })

  server.get('/members', (req, res) => {
    return app.render(req, res, '/members', req.query)
  })

  server.get('/projects', (req, res) => {
    return app.render(req, res, '/projects', req.query)
  })

  server.get('/workshops', (req, res) => {
    return app.render(req, res, '/workshops', req.query)
  })

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})