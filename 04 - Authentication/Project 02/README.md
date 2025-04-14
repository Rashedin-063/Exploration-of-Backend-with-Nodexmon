# 🔐 Session-Based Authentication in Express with Passport.js

This guide outlines the essential steps to implement **session-based authentication** using **Express**, **Passport.js**, and **MongoDB**.

---

## 🧩 Dependencies Required

```bash
npm install express express-session passport passport-local bcrypt mongoose connect-mongo dotenv
```

---

## 🚀 Step-by-Step Guide

### 1. Initialize the Project

```bash
mkdir session-authentication
cd session-authentication
npm init -y
```

### 2. Install Dependencies

Install the required dependencies:

```bash
npm install express express-session passport passport-local bcrypt mongoose connect-mongo dotenv
```

### 3. Set Up the Project Structure

Create the following folder structure:

```
project-folder/
├── controllers/
├── models/
├── routes/
├── views/
├── .env
├── index.js
├── package.json
```

### 4. Configure Environment Variables

Create a `.env` file and add the following:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### 5. Set Up MongoDB Connection

In `index.js`, connect to MongoDB using Mongoose:

```javascript
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
```

### 6. Create User Model

In `models/user.js`, define the user schema:

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
```

### 7. Configure Passport.js

In `index.js`, configure Passport.js:

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
