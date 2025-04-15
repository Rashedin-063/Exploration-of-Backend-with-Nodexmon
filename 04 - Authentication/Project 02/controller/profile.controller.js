const getProfile = (req, res) => {

   res.render('profile', {user: req.user});

};

module.exports = { getProfile };