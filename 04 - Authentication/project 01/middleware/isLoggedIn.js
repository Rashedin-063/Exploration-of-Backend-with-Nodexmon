
const isLoggedIn = (req, res, next) => { 
    if (req.isAuthenticated()) {
      return res.redirect('/profile');
  }
    next()
}

module.exports = isLoggedIn;