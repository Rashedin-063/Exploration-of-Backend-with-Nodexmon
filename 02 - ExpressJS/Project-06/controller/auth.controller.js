const express = require('express');
const path = require('path');
const result = require('../validation/userValidation');

const router = express.Router();

// Render register page
const renderRegisterPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/register.html'));
};

// Render login page
const renderLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
};

// Mock logic for register
const register = (req, res) => {
  try {
    const { username, email, password } = req.body;
    
      // if (!username || !email || !password) {
      //   return res
      //     .status(400)
      //     .json({ message: 'Username, email and password are required' });
      // }
      // Simulate user registration logic
      res
        .status(201)
        .json({
          message: 'User registered successfully',
          // user: { username, email },
          result
        });
  } catch (error) {
     res.status(500).json({
       success: false,
       message: error.message ? error.message : 'Something went wrong',
     });
  }
};

// Mock logic for login
const login = (req, res) => {
try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: 'Username and password are required' });
    }
    // Simulate user login logic
    res
      .status(200)
      .json({ message: 'User logged in successfully', user: { username } });
} catch (error) {
  res.status(500).json({
    success: false,
    message: error.message ? error.message : 'Something went wrong'
  })
}
};

// Register page route
router.get('/register', renderRegisterPage);

// Login page route
router.get('/login', renderLoginPage);

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

module.exports = router;
