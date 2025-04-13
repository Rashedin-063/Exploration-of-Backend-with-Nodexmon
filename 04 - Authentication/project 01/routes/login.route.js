const express = require('express');
const { loginUser, loginPage } = require('../controller/login.controller');
const isLoggedIn = require('../middleware/isLoggedIn');

const router = express.Router();

router.get('/', isLoggedIn, loginPage)

router.post('/', loginUser);

module.exports = router;