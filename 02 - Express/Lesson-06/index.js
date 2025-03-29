const express = require('express');

const app = express();

const PORT = 3000;

app.get('', (req, res) => {
  res.status(200).send('<h1>Welcome to my server</h1>');
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
  
})
