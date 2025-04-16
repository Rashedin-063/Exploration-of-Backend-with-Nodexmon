require('dotenv').config();
const passport = require('passport');
const User = require('../models/user.model');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
   async function (accessToken, refreshToken, profile, done) {
        try {
          const user = await User.findOne({ googleId: profile.id });
          if (user) {
            return done(null, user);
          } else {
            const newUser = await User.create({
              username: profile.displayName,
              googleId: profile.id,
            });
            return done(null, newUser);
          }
        } catch (error) {
          return done(error, null);
        }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

