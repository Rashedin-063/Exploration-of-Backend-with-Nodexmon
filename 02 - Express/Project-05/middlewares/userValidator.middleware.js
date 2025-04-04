const { validationResult } = require('express-validator');



const userValidator = (req, res, next) => {
  console.log('middleware.validator')
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorsList = errors.array().map((error) => error.msg);
    // return res.status(422).json({ errors: errorsList });
    return res.status(422).send({
      success: false,
      message: errors.array()[0].msg,
    });
  }
  next();
};


module.exports = userValidator;
