const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'product title is required'],
    minLength: [3, 'minimum title length is three'],
    lowercase: true,
    // uppercase: true,
    trim: true,
    // enum: {
    //   values: ['iphone', 'samsung', 'android', 'blackberry'],
    //   message: '{VALUE} is not supported'
    // },
  },
  price: {
    type: Number,
    required: true,
    min: [100, 'minimum price should be 100'],
    max: [2000, 'maximum price should be within 2000'],
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  email: {
    type: String,
    required: [true, 'email is needed'],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;

// module.exports = mongoose.model('Product', productSchema)