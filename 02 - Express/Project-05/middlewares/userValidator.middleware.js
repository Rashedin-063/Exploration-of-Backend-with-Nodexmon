const { body, validationResult } = require('express-validator');

const userValidator = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 4 })
    .withMessage('Name should be at least 4 characters long')
    .isLength({ max: 30 })
    .withMessage('Name can not exceed 30 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 4 })
    .withMessage('Password should be at least 4 characters long'),
  body('dob')
    .trim()
    .notEmpty()
    .withMessage('date of birth is required')
    .isISO8601()
    .toDate()
    .withMessage('Not a valid date'),

  // Middleware to handle validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = userValidator;
