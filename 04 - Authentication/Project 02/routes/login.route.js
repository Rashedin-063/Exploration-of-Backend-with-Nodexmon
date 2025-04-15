const express = require('express');
const { loginUser, loginPage } = require('../controller/login.controller');
const checkIsLoggedIn = require('../middlewares/checkIsLoggedIn');


const router = express.Router();

router.get('/', checkIsLoggedIn, loginPage);

router.post('/', loginUser);

module.exports = router;
