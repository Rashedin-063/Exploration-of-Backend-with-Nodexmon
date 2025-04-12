const getProfile = (req, res) => {
  // Mock user data
  const user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
  };
 res.render('profile')
};

module.exports = { getProfile };