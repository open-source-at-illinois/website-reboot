require('check-node-version')(
  { node: "10.22" },
  (err, result) => {
    if (err) {
      console.log("An error was encountered while checking the node version:")
      console.log(err)
      return
    }
    if (!result.isSatisfied) {
      console.log('*****************WARNING*****************')
      console.log('You have a different node version from what is on cPanel!')
      console.log('(Expected: 10.22.0, got ' + result.versions['node'].version + ')')
      console.log('Consider using a tool like nvm to test with the proper version.')
      console.log('*****************************************')
    }
  }
)

// Not necessary in cPanel, .env is not used.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

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
    res.redirect(302, 'https://open-source-at-illinois.github.io/workshops/')
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