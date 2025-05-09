const express = require('express');
const { getAllProducts, createProduct, getSingleProduct, deleteProduct, updateProduct } = require('../controllers/products.controller');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/', createProduct)
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

module.exports = router;
