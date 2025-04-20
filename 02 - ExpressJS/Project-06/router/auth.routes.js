const express = require('express');
const { renderRegisterPage, renderLoginPage, registerUser, loginUser } = require('../controller/auth.controller');

const router = express.Router();


// Register page route
router.get('/register', renderRegisterPage);

// Login page route
router.get('/login', renderLoginPage);

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);


module.exports = router;