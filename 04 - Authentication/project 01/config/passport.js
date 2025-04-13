const passport = require('passport');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy(async (userName, password, done) => {
    
    try {
      const user = await User.findOne({ userName: userName });
       if (!user) {
         return done(null, false, { message: 'Incorrect username' });
      }
      
      if (!bcrypt.compare(password, user.password)) {
          return done(null, false, { message: 'Incorrect password' });
      } 

       return done(null, user);

    } catch (error) {
        return done(err);
    }

  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
  
  try {
    const user = await User.findById(id);
    done(null, user)
  } catch (error) {
    done(error, false)
  }

  User.findById(id, function (err, user) {
    done(err, user);
  });
});
