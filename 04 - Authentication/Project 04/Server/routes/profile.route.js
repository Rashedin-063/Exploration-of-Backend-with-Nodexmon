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
    res.send(req.user.profile);
  }
);

module.exports = router;
