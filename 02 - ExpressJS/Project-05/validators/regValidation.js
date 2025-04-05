const { check } = require('express-validator');

exports.regValidation = [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 4, max: 30 })
    .withMessage('Name must be between 4 and 30 characters'),

  check('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address'),

  check('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 4 })
    .withMessage('Password should be at least 4 characters long'),

  check('dob')
    .trim()
    .notEmpty()
    .withMessage('Date of birth is required')
    .isISO8601()
    .withMessage('Not a valid date')
    .toDate(),
];
