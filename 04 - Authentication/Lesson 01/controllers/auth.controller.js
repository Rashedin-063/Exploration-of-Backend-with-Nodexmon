const User = require("../models/user.model");


const getRegisteredUsers = (req, res) => {
  res.status(200).json({
    message: 'Welcome to the registration API',
  });
};

const getLoginUsers = (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Login API',
  });
}


const registerUser = async(req, res) => {

  try {
    const newUser = new User(req.body);

  const savedUser =  await newUser.save()

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: savedUser,
    });

  } catch (error) {
    res.status(500).json(error.message)
  }

  
};


const loginUser = (req, res) => {
  res.status(201).json({
    message: 'User logged in successfully',
  });
};


module.exports = {
  getRegisteredUsers,
  getLoginUsers,
  registerUser,
  loginUser,
}