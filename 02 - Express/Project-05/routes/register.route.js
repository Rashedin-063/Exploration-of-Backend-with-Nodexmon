const express = require('express');
const app = express();
const { registerUser } = require('../controllers/register.controller');
const userValidator = require('../middlewares/userValidator.middleware');
const { regValidation } = require('../validators/regValidation');
const router = express.Router();

// express body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

router.post(
  '/register',
  regValidation,
  userValidator,
  registerUser);

module.exports = router;
