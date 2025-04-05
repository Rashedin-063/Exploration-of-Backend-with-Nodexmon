const Product = require("../model/product.model");


const getAllProducts = (req, res) => {
  res.send({ message: 'products route' });
};

const createProduct = async (req, res) => { 
 

  try {
    // create a new product
    const { title, price, quantity } = req.body;

    const newProduct = new Product({title, price, quantity});

    // save the product to the database
    await newProduct.save();

    res.status(201).send(newProduct);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}


module.exports = {
  getAllProducts,
  createProduct
}