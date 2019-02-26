const express = require('express');
const helloRouter = require('./routes/helloRouter');
const authRouter = require('./routes/auth/authRouter');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(authRouter);
app.use(helloRouter);

module.exports = app;