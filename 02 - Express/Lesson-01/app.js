const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my server!!!');
  res.end();
});
app.get('/register', (req, res) => {
  res.send('Welcome to Registration Process!!!');
  res.end();
});
app.get('/login', (req, res) => {
  res.send('Please Sign In!!!');
  res.end();
});



module.exports = {
  app
};