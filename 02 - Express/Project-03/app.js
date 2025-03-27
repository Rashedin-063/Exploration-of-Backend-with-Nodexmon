const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true, limit: '1mb' }));
// app.use(express.json());


module.exports = app;