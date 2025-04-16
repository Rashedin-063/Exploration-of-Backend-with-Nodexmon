const passport = require("passport");

const loginPage = (req, res) => {
  res.render('login', { title: 'Login' });
};

const loginUser = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  })(req, res, next);
};

module.exports = { loginUser, loginPage };
