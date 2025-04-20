const express = require('express');
const { renderRegisterPage, renderLoginPage, registerUser, loginUser } = require('../controller/auth.controller');
const {registerValidation, loginValidation} = require('../validation/userValidation');
const { registerSchema, loginSchema } = require('../validation/schemas');

const router = express.Router();


// Register page route
router.get('/register', renderRegisterPage);

// Login page route
router.get('/login', renderLoginPage);

// Register route
router.post('/register', registerValidation(registerSchema), registerUser);

// Login route
router.post('/login', loginValidation(loginSchema), loginUser);


module.exports = router;