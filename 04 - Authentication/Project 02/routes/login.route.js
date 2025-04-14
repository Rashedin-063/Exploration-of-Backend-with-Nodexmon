const express = require('express');
const { loginUser, loginPage } = require('../controller/login.controller');

const router = express.Router();

router.get('/', loginPage);

router.post('/', loginUser);

module.exports = router;
