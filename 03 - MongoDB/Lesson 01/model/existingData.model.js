const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  designation: String,
  company: {
    type: String,
    default: null
  }
});

const User = mongoose.model('User', userSchema); // This will look for 'users' collection
module.exports = User;
