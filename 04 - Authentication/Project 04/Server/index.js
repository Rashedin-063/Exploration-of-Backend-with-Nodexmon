require('dotenv').config();
require('./config/dbConnect')
require('./config/passport');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());



// routes
const authRoute = require('./routes/auth.route');
const profileRoute = require('./routes/profile.route');


app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, 'views', '500.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
