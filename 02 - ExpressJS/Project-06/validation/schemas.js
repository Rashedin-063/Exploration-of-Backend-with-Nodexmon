const Joi = require("joi");


 const registerSchema = Joi.object({
   username: Joi.string().min(3).max(15).required(),
   dob: Joi.date().greater(new Date('1990-01-01')).required(),
   age: Joi.number().required(),
   email: Joi.string().email().required(),
   isRegistered: Joi.boolean().required(),
   languages: Joi.array().items(Joi.string()).required(),
   password: Joi.string().min(6).max(8).required(),
   confirmPassword: Joi.ref('password')
 });
    
 const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(8).required(),
  })

  module.exports = { registerSchema , loginSchema };

