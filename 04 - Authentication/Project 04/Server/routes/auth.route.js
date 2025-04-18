const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
  res.status(200).json({ message: 'Register page' });
});

router.post('/register', (req, res) => { 
  const { username, password } = req.body;
  // Here you would normally save the user to the database
  res.status(201).json({ message: 'User registered successfully' });
})


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