const logoutUser = (req, res) => {

  return res.status(200).json({
    message: 'Logout successful',
    status: true,
    data: null,
    error: null
  })

    res.render('index.cjs');

};

module.exports = { logoutUser };