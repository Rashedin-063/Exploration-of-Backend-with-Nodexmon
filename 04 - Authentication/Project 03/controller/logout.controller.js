

const logoutUser = (req, res, next) => {
   req.logout((err) => {
     if (err) {
      return next(err)
     }
      req.session.destroy(() => {
        res.clearCookie('connect.sid'); // Optional: clears the cookie
        res.redirect('/');
      });
  })
};

module.exports = { logoutUser };