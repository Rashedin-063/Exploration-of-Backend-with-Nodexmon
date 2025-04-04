const express = require('express');
const { registerUser } = require('../controllers/register.controller');
const userValidator = require('../middlewares/userValidator.middleware');
const router = express.Router();


router.post('', userValidator, registerUser)


module.exports = router;