require('dotenv').config();
require('./config/dbConnect')
require('./config/passport')
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
const PORT = process.env.PORT || 3000;

const registerRoute = require('./routes/register.route');
const loginRoute = require('./routes/login.route');
const profileRoute = require('./routes/profile.route');
const logoutRoute = require('./routes/logout.route');



// Middleware
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1); // trust first proxy
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    }),
    cookie: {
    secure: process.env.NODE_ENV === 'production', // true in production, false in dev
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  }
  })
);

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/profile', profileRoute);
app.use('/logout', logoutRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
