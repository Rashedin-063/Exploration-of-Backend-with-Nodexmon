const Product = require("../model/product.model");


const getAllProducts = async (req, res) => {
 try {
   const allProducts = await Product.find();
   res.status(200).send(allProducts);
 } catch (error) {
  res.status(500).send({message: error.message});
 }
};

const createProduct = async (req, res) => { 
 

  try {
    // create a new product
    const { title, price, quantity } = req.body;

    const newProduct = new Product({title, price, quantity});

    // save the product to the database
    const savedProduct = await newProduct.save();

    res.status(201).send(savedProduct);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}


module.exports = {
  getAllProducts,
  createProduct
}