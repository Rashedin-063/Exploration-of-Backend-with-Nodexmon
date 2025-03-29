const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to my server from lesson 6</h1>');
})
app.get('/register', (req, res) => {
  res.send('<h1>Welcome to my server from register</h1>');
  res.status(200).sendFile(__dirname + 'index.html')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
  
})
