const express = require('express');

const router = express.Router();

// Mock logic for register
const register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  // Simulate user registration logic
  res.status(201).json({ message: 'User registered successfully', user: { username } });
};

// Mock logic for login
const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  // Simulate user login logic
  res.status(200).json({ message: 'User logged in successfully', user: { username } });
};

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

module.exports = router;