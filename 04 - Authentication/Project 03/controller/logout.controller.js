

const logoutUser = (req, res) => {
   req.logout((err) => {
     if (err) {
      return next(err)
     }
     res.redirect('/')
  })

};

module.exports = { logoutUser };