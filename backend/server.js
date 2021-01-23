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

const { SERVER_PORT = 3001, DISCORD_TOKEN, CHANNEL_ID } = process.env;

const cors = require('cors');
const express = require('express')
const discord = require('discord.js');
const app = express()

const discordBot = new discord.Client();

// Configure Bot
discordBot.once('ready', () => {
    console.log('Discord bot is ready at ' + (new Date()).toLocaleString() + '!')
})

discordBot.login(DISCORD_TOKEN);

// Configure app
app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`Magic at ${SERVER_PORT}`);
})

app.get('/messages', cors(), (req, res, next) => {
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
