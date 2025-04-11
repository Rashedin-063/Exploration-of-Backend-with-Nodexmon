const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
const { validate } = require('./product.model');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    min: [6, 'Password must be at least 6 characters long'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const encKey = process.env.ENC_KEY;

// encrypt password regardless of any other options. name and _id will be left unencrypted
userSchema.plugin(encrypt, {
  secret: encKey,
  encryptedFields: ['password'],
});

const User = mongoose.model('User', userSchema);

module.exports = User;