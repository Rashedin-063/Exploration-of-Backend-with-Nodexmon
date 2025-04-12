require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;


app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
