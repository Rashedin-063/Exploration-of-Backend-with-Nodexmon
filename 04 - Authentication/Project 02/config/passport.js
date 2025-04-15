const passport = require("passport");
const User = require("../models/user.model");
const bcrypt = require('bcrypt');


passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: 'Incorrect email' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }

      // If the password is correct, return the user object
      return done(null, user);

    } catch (error) {
      return done(error);
      
    }
  })
);


/**
 * passport.use(
   new LocalStrategy(
     { usernameField: 'email' },
     async (email, password, done) => {
       try {
         const user = await User.findOne({ email: email });
         if (!user) {
           return done(null, false, { message: 'Incorrect email' });
         }
 
         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) {
           return done(null, false, { message: 'Incorrect password' });
         }
 
 
         return done(null, user);
       } catch (error) {
         return done(error);
       }
     }
   )
 );
 */