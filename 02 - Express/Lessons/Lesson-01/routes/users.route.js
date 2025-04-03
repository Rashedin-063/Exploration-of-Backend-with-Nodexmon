const express = require('express');
const router = express.Router();



router.get('/register', (req, res) => {
  res.send('<h1>Welcome to Registration Process!!!</h1>');
  res.end();
});
router.get('/login', (req, res) => {
  res.send('<h1>Please Sign In!!!</h1>');
  res.end();
});


module.exports = router;