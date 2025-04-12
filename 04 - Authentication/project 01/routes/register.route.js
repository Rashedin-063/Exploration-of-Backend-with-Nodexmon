const express = require('express');
const { registerUser, getRegisteredUser } = require('../controller/register.controller');

const router = express.Router();

router.get('/', getRegisteredUser)

router.post('/', registerUser);

module.exports = router;