require('dotenv').config();
require('./config/dbConnect');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.set('trust proxy', 1); // trust first proxy
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: 'sessions',
      ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    }),
    // cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const registerRoute = require('./routes/register.route');
const loginRoute = require('./routes/login.route');
const profileRoute = require('./routes/profile.route');
const logoutRoute = require('./routes/logout.route');

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

// register route
app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/profile', profileRoute)
app.use('/logout', logoutRoute)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
