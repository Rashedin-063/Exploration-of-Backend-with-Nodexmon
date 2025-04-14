const getProfile = (req, res) => {

  // console.log(req.isAuthenticated());
  

  // if (req.isAuthenticated()) {
  // return  res.render('profile');
  // }
  // res.redirect('/login');

   res.render('profile');

};

module.exports = { getProfile };