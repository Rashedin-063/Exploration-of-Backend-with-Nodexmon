const User = require("../models/user.model");


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