const passport = require("passport");
require('../config/passport')


const loginPage = (req, res) => { 
  res.render('login', { title: 'Login' });
}

const loginUser = (req, res, next) => {
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/profile',
  })(req, res, next);
};

module.exports = { loginUser, loginPage };

