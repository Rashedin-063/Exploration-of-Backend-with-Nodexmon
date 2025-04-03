const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'user name is required']
  },
  image: {
    type: String,
    required: [true, 'user image is required']
  }
})

const User = mongoose.model('Users', userSchema);

module.exports = User;