const passport = require("passport");


const loginPage = (req, res) => { 
  res.render('login', { title: 'Login' });
}

const loginUser = (req, res) => {
  try {
   
     passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/profile' })
   
 } catch (error) {
    res.status(500).json({
     success: false,
      message:  error.message ? error.message : 'Server error',
      data: null,
   })
 }
};

module.exports = { loginUser, loginPage };

