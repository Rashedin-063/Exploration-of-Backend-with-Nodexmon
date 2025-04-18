const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const saltRounds = 10;

const getRegisterPage = (req, res) => {
  res.status(200).json({ message: 'Register page' });
};

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const newUser = new User({
    username,
    password: await bcrypt.hash(password, saltRounds),
  });

  await newUser.save();

  res
    .status(201)
    .json({
      success: true,
      message: 'User registered successfully',
      data: newUser,
    });
};

module.exports = {
  getRegisterPage,
  registerUser,
};
