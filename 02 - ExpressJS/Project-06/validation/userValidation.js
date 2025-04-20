const Joi = require('joi');

// create a schema
const schema = Joi.object({
  username: Joi.string().min(3).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(8).required() 
})

// validate the data using schema
const result = schema.validate({})

console.log(result)


module.exports = result
