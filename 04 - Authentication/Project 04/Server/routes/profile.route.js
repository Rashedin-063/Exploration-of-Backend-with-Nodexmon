const express = require('express');
const passport = require('passport');
const path = require('path');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'views', 'profile.html'));
// });

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    return res.status(200).send({
      success: true,
      user: {
        id: req.user._id,
        username: req.user.username,
      },
    });
  }
);

module.exports = router;
