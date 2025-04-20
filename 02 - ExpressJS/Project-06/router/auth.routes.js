const express = require('express');
const { renderRegisterPage, renderLoginPage, registerUser, loginUser } = require('../controller/auth.controller');
const registerValidation = require('../validation/userValidation')

const router = express.Router();


// Register page route
router.get('/register', renderRegisterPage);

// Login page route
router.get('/login', renderLoginPage);

// Register route
router.post('/register', registerValidation, registerUser);

// Login route
router.post('/login', loginUser);


module.exports = router;