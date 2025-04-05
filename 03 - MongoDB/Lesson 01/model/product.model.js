const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: { 
    type: Number,
    required: true,
    min: 0
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;

// module.exports = mongoose.model('Product', productSchema)