const express = require('express');
const { getRegisterPage, registerUser } = require('../controllers/register.controller');
const router = express.Router();

router.get('/register', getRegisterPage);

router.post('/register', registerUser)


// Login route
router.get('/login', (req, res) => {
  res.status(200).json({ message: 'Login page' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Here you would normally check the user credentials against the database
  res.status(200).json({ message: 'User logged in successfully' });
})


module.exports = router;