const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my server!!!');
  res.end();
});

app.post('/', (req, res) => {
  res.send('Posting some data....');
   res.end();
})

app.put('/', (req, res) => {
  res.send('Updating some data....');
   res.end();
})

app.delete('/', (req, res) => {
  res.send('Deleting some data....');
   res.end();
})


module.exports = {
  app
};