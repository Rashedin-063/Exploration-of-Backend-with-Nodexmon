const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
 createdAt: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('User', userSchema)