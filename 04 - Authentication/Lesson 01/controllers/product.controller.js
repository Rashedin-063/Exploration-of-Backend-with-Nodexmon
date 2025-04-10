const Product = require('../models/product.model');

// Create a new product
exports.createProduct = (req, res) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((product) => res.status(201).json(product))
    .catch((error) =>
      res.status(500).json({ message: 'Error creating product', error })
    );
};

// Get all products
exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) =>
      res.status(500).json({ message: 'Error fetching products', error })
    );
};

// Get a single product by ID
exports.getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      if (!product)
        return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(product);
    })
    .catch((error) =>
      res.status(500).json({ message: 'Error fetching product', error })
    );
};

// Update a product by ID
exports.updateProduct = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((product) => {
      if (!product)
        return res.status(404).json({ message: 'Product not found' });
      res.status(200).json(product);
    })
    .catch((error) =>
      res.status(500).json({ message: 'Error updating product', error })
    );
};

// Delete a product by ID
exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (!product)
        return res.status(404).json({ message: 'Product not found' });
      res.status(200).json({ message: 'Product deleted successfully' });
    })
    .catch((error) =>
      res.status(500).json({ message: 'Error deleting product', error })
    );
};
