const express = require('express');
const helloRouter = require('./routes/helloRouter');
const authRouter = require('./routes/auth/authRouter');
const itemRouter = require('./routes/itemRouter');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expresValidator = require('express-validator');

mongoose.connect('mongodb://localhost/api_test', {useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());
app.use(expresValidator());
app.use(authRouter);
app.use(helloRouter);
app.use(itemRouter);

module.exports = app;