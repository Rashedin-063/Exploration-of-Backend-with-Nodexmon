const express = require('express');
const { getAllProducts, createProduct, getSingleProduct } = require('../controllers/products.controller');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/', createProduct)

module.exports = router;
