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
    console.log('Discord bot is ready!')
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
