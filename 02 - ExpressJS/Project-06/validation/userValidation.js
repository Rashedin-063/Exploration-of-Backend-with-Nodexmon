const Joi = require('joi');

const loginValidation = (req, res, next) => {
  // create a schema
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(8).required(),
  });

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

  next()
}
const registerValidation = (req, res, next) => {
  // create a schema
  // create a schema
  const schema = Joi.object({
    username: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(8).required(),
  });

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

  next()
}


module.exports = {registerValidation, loginValidation}
