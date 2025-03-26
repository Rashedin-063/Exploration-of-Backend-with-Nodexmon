require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

// regular expressions

// app.get('/products/:id([0-9]{3})', (req, res) => {
//   res.send(`<h2> ID = ${req.params.id} </h2>`);
// })
// app.get('/products/:title([a-zA-Z-_]+)', (req, res) => {
//   res.send(`<h2> Title = ${req.params.title} </h2>`);
// })

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Express Server</h1>');
});

app.get('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
