# 🔐 Session-Based Authentication in Express with Passport.js

This guide outlines the essential steps to implement **session-based authentication** using **Express**, **Passport.js**, and **MongoDB**.

---

## 🧩 Dependencies Required

```bash
npm install express express-session passport passport-local bcrypt mongoose connect-mongo dotenv
```

---

## 🚀 Step-by-Step Guide
### 1. Configure Environment Variables

Create a `.env` file and add the following:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### 2. Set Up MongoDB Connection

In `confit/dbConnect.js`, connect to MongoDB using Mongoose:


### 6. Create User Model

In `models/user.js`, define the user schema:

### 7. Configure Passport.js

In `config/passport.js`, configure Passport.js:

```javascript
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: 'Incorrect username.' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return done(null, false, { message: 'Incorrect password.' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
```

### 8. Set Up Express Session

In `index.js`, configure session and Passport middleware:

```javascript
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
```

### 9. Create Authentication Routes

In `routes/auth.js`, define routes for login, logout, and registration:

```javascript
const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

// Login
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })
);

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

module.exports = router;
```

### 10. Protect Routes

Create a middleware to protect routes:

```javascript
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}
```

Use it in your routes:

```javascript
app.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.send('Welcome to your dashboard');
});
```

### 11. Start the Server

Run the server:

```bash
node index.js
```

Visit `http://localhost:3000` to test your application.
