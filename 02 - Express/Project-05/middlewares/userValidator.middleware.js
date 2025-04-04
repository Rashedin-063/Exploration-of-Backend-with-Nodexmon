const { body } = require('express-validator');

const userValidator = body('name').trim().notEmpty();

module.exports = userValidator;
