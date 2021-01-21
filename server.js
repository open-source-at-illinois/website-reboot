require('dotenv').config();
const { SERVER_PORT, DISCORD_TOKEN, CHANNEL_ID, NODE_ENV } = process.env;

const express = require('express')
const next = require('next')
const discord = require('discord.js');

const port = SERVER_PORT;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const discordBot = new discord.Client();
  server.use(express.json());

  discordBot.once('ready', () => {
    console.log('Discord bot is ready!')
  })

  discordBot.login(DISCORD_TOKEN);

  server.get('/messages', (req, res, nxt) => {
    console.log('GET @ messages')
    const channel = discordBot.channels.get(CHANNEL_ID);
    channel.fetchMessages({ limit: req.query.count || 3 })
        .then(messages => {
            res.send(messages.map(m => { 
                return {
                    created: new Date(m.createdTimestamp).toISOString(), 
                    content: m.content
                }
            }))
        })
  })

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