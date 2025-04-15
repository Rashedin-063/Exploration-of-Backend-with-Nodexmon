# 🛡️ User Session and Authentication with Passport.js (Express + MongoDB)

This guide walks you through setting up **user authentication** and **session management** using **Passport.js**, **Express.js**, **MongoDB**, and **Mongoose**.

## 📦 Install Required Packages

Run the following command to install the necessary dependencies:

## Step 1: Install the dependecies
```bash
npm install express mongoose dotenv passport passport-local express-session connect-mongo bcrypt
```


## step 2 : Configure Passport (in config/passport.js)

```
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { message: 'Incorrect email' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done(null, false, { message: 'Incorrect password' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


```
