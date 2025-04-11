const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;


const getRegisteredUsers = async (req, res) => {
  
 try {
   const users = await User.find({});
   if(users.length === 0) {
     return res.status(404).json({
       message: 'No users found',
     });
   }
   res.status(200).json({
     message: 'Users found',
     users: users,
   });
 } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  
 }


const getLoginUsers = (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Login API',
  });
}


const registerUser = (req, res) => {

  try {

    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      const newUser = new User({
        email: req.body.email,
        password: hash,
      });

      const savedUser = await newUser.save();

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user: savedUser,
      });
    });

    

  } catch (error) {
    res.status(500).json(error.message)
  }

  
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      return res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        user,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Incorrect password',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};



module.exports = {
  getRegisteredUsers,
  getLoginUsers,
  registerUser,
  loginUser,
}