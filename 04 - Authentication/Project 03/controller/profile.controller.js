const getProfile = (req, res) => {

   res.render('profile', {user: req.user.username});

};

module.exports = { getProfile };