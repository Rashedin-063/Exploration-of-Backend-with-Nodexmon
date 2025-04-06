const Product = require("../model/product.model");


const getAllProducts = async (req, res) => {
 try {
   const allProducts = await Product.find();
   res.status(200).send(allProducts);
 } catch (error) {
  res.status(500).send({message: error.message});
 }
};

const getSingleProduct = async (req, res) => { 
  try {
    const productId = req.params.id;
    const foundProduct = await Product.findById(productId);
    res.status(200).send(foundProduct);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

const createProduct = async (req, res) => { 
 

  try {
    // create a new product
    const { title, price, quantity } = req.body;

    const newProduct = new Product({title, price, quantity});

    // save the product to the database
    const savedProduct = await newProduct.save()

    // const savedMultipleProducts = await Product.insertMany([
    //   { title: 'Samsung Tab', price: '40000', quantity: 1 },
    //   { title: 'iPhone 12', price: '100000', quantity: 5 },
    //   { title: 'Google Pixel 5', price: '70000', quantity: 3 },
    //   { title: 'Xiaomi Mi 11', price: '60000', quantity: 2 },
    // ]);

    res.status(201).send(savedProduct);
    // res.status(201).send(savedMultipleProducts);
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}


module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct
}