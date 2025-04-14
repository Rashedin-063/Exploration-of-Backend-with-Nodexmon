# 🔐 Session-Based Authentication in Express with Passport.js

This guide outlines the essential steps to implement **session-based authentication** using **Express**, **Passport.js**, and **MongoDB**.

---

## 🧩 Dependencies Required

```bash
npm install express express-session passport passport-local bcrypt mongoose connect-mongo dotenv
```

## step 1
```
 db.js
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
```

## step 2
```
 models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  email: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model('User', userSchema);

```

## step 3
```
// app.js
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: 'sessions',
    ttl: 14 * 24 * 60 * 60, // 14 days
  }),
}));

```

## step 4
```
// config/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

passport.use(new LocalStrategy({ usernameField: 'email' },
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
  const user = await User.findById(id);
  done(null, user);
});


```