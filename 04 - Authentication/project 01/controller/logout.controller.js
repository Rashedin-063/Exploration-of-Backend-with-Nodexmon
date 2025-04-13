

const logoutUser = (req, res) => {

 try {
   req.logout((err) => {
     if (err) {
      return next(err)
     }
     res.redirect('/')
  })
 } catch (error) {
  res.status(500).json({
    success: false,
    message: error.message ? error.message : 'Server error',
    data: null,
  });
 }

};

module.exports = { logoutUser };