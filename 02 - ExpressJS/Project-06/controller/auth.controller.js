const express = require('express');
const path = require('path');
const Joi = require('joi');

const router = express.Router();

// Render register page
const renderRegisterPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/register.html'));
};

// Render login page
const renderLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
};

// Mock logic for register
const registerUser = (req, res) => {
  try {
    const { username, email, password } = req.body;

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        username,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message ? error.message : 'Something went wrong',
    });
  }
};

// Mock logic for login
const loginUser = (req, res) => {
  try {
    const { username, password } = req.body;
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
    // Simulate user login logic
    res
      .status(200)
      .json({ message: 'User logged in successfully', user: { username } });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message ? error.message : 'Something went wrong',
    });
  }
};

module.exports = {
  renderRegisterPage,
  renderLoginPage,
  registerUser,
  loginUser,
};
