

const getRegisterPage = (req, res) => {
  res.status(200).json({ message: 'Register page' });
};

const registerUser = async(req, res) => {
  const { username, password } = req.body;
  // Here you would normally save the user to the database
  res.status(201).json({ message: 'User registered successfully' });
};


module.exports = {
  getRegisterPage,
  registerUser
};