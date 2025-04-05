const path = require('path');
const products = require('../models/products.model');

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/products.html'));
  // res.sendFile(__dirname + '/../views/products.html');
};

exports.saveProduct = (req, res) => {
  const { name, price } = req.body;

  const newProduct = {  name, price };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    products,
  });
};
