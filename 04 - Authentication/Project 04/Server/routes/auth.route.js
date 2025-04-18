const express = require('express');
const { getRegisterPage, registerUser } = require('../controllers/register.controller');
const { getLoginPage, loginUser } = require('../controllers/login.controller');
const router = express.Router();

router.get('/register', getRegisterPage);

router.post('/register', registerUser)


// Login route
router.get('/login', getLoginPage);

router.post('/login', loginUser)


module.exports = router;