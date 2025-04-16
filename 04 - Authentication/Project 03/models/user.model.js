const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  googleId: {
    type: String,
    required: true,
  },
  accessToken: String, 
  refreshToken: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;