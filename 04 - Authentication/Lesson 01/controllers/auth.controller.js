

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


const registerUser = (req, res) => {
  res.status(201).json({
    message: 'User registered successfully',
  });
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