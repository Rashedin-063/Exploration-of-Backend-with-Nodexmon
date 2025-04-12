const getProfile = (req, res) => {
  // Mock user data
  const user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
  };
  res.status(200).json(user);
};

module.exports = { getProfile };