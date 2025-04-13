const passport = require("passport");
require('../config/passport')


const loginPage = (req, res) => {
  res.render('login', {
    title: 'Login',
    error: req.flash('error'), // ← access flash error
  });
};


const loginUser = (req, res, next) => {
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/profile',
    failureFlash: true
  })(req, res, next);
};

module.exports = { loginUser, loginPage };

