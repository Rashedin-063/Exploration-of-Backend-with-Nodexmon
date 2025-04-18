

const getLoginPage = (req, res) => {
  res.status(200).json({ message: 'Login page' });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  // Here you would normally check the user credentials against the database
  res.status(200).json({ message: 'User logged in successfully' });
};


module.exports = {
  getLoginPage,
  loginUser
};