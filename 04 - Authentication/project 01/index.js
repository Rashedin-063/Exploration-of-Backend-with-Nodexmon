require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;

const registerRoute = require('./routes/register.route');
const loginRoute = require('./routes/login.route');
const profileRoute = require('./routes/profile.route');

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/views/index.html');
  res.render('index');
});

// register route
app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/profile', profileRoute)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
