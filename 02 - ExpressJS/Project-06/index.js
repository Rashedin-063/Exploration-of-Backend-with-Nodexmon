require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Express Project 6');
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 

