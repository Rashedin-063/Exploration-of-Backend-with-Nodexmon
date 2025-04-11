const express = require('express');
const { getRegisteredUsers, getLoginUsers, registerUser, loginUser } = require('../controllers/auth.controller');
const router = express.Router();


router.get('/register', getRegisteredUsers)


router.get('/login',  getLoginUsers)


router.post('/register', registerUser)


router.post('/login', loginUser);


module.exports = router;