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

// handling server error
app.use((error, req, res, next) => { 
  res.status(500).json({
    message: "Internal Server Error",
  })
})

// route not found
app.use((req, res, next) => { 
  res.status(404).json({
    message: "Route not found",
  })
})


app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`);
})
