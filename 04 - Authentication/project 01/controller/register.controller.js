const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passport = require('passport');
const session = require('express-session');

const app = express();
app.set('trust proxy', 1); // trust first proxy
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

const User = require('../models/user.model');

const getRegisteredUser = async (req, res) => {
  res.render('register');
};


const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) return res.status(400).json({ message: 'User already exists' });

    bcrypt.hash(password, saltRounds, async function (err, hash) {
        if (err) {
          console.error('Error hashing password:', err);
          return res
            .status(500)
            .json({ message: 'Error while hashing password' });
        }
      const newUser = new User({
      userName,
      email,
      password: hash,
    });

    await newUser.save();

    res.status(201).redirect('/login');
    });

   
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message ? error.message : 'Server error',
      data: null,
    });
  }
};

module.exports = { registerUser, getRegisteredUser };
