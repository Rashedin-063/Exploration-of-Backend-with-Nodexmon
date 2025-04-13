require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

require('./config/dbConnect');

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
