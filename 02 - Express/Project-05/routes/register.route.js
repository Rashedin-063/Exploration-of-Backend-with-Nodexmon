const express = require('express');
const { registerUser } = require('../controllers/register.controller');
const userValidator = require('../middlewares/userValidator.middleware');
const { regValidation } = require('../validators/regValidation');
const router = express.Router();

router.post(
  '/register',
  regValidation,
  userValidator,
  registerUser);

module.exports = router;
