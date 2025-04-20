const Joi = require('joi');

const loginValidation = (schema) => {
 return (req, res, next) => {
    // create a schema

    // validate the data using schema
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      errors: { wrap: { label: '' } },
    });

    if (error) {
      const errorList = error.details.map((err) => err.message);
      res.status(400).json({
        message: 'invalid input',
        error: errorList,
      });
    }

    next();
  };
}

const registerValidation = (schema) => {
  return (req, res, next) => {
    // validate the data using schema
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      errors: { wrap: { label: '' } },
    });

    if (error) {
      const errorList = error.details.map((err) => err.message);
      res.status(400).json({
        message: 'invalid input',
        error: errorList,
      });
    }

    next();
  };

}

module.exports = {registerValidation, loginValidation}
