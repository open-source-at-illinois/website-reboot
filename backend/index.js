require('dotenv').config();

const {SERVER_PORT, SESSION_SECRET} = process.env;

const express = require('express');
const session = require('express-session');

const app = express();


app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.listen(SERVER_PORT, () => {
    console.log(`Magic at ${SERVER_PORT}`);
});