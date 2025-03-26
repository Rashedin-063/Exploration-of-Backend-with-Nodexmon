const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my server!!!');
});

app.post('/', (req, res) => {
  res.send('Posting some data....')
})

app.put('/', (req, res) => {
  res.send('Updating some data....')
})

app.delete('/', (req, res) => {
  res.send('Deleting some data....')
})


module.exports = {
  app
};