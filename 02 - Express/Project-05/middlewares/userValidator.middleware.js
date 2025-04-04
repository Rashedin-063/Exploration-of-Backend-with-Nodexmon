const { body } = require('express-validator');

const userValidator = [
  body('name').trim().notEmpty().withMessage('Name is required'),

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
