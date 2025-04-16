# 🛡️ Google OAuth Authentication with Passport.js

This project demonstrates how to implement **Google OAuth 2.0 authentication** in a Node.js application using **Passport.js** and **Express**.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- Passport.js
- MongoDB (with Mongoose)
- EJS (for views)

---

## 📦 Step 1: Install Required Packages

```bash
npm install passport passport-google-oauth20 express-session 
 connect-flash ---> optional, if flash-message needed
 ```

 ## 🔐 Step 2: Passport & Session Setup

 ``` index.js / server.js

const session = require('express-session');
const passport = require('passport');
require('./config/passport'); // Your Google strategy config

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

 ```

 ## 🌐 Step 3: Google OAuth Strategy

 ``` config/passport.js
 const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback',
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });

    if (user) return done(null, user);

    const newUser = await User.create({
      username: profile.displayName,
      googleId: profile.id,
      // accessToken, refreshToken can also be stored here if needed
    });

    return done(null, newUser);
  } catch (err) {
    return done(err, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
```

## 📁 Step 4: Routes

``` routes/auth.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/profile'
  })
);

module.exports = router;
```

👤 Profile Route (routes/profile.js)

```
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile', { user: req.user });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;

```