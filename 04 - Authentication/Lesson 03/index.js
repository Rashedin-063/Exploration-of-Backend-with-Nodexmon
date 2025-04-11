require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');
const dbConnect = require('./config/dbConnect');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
dbConnect()

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/index.html');
});

// auth route
app.use('/api', authRoute);

// product route
app.use('/api/product', productRoute);

// handling server error
app.use((error, req, res, next) => {
  res.status(500).json({
    message: 'Internal Server Error',
  });
});

// route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
