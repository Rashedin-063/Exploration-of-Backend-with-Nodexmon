const loginUser = (req, res) => {
  const { username, password } = req.body;
  // Add authentication logic here
  res.status(200).json({ message: 'Login successful', username });
};

module.exports = { loginUser };