const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/index.html');
});




app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`);
})
