const express = require('express');
const router = express.Router()
const app = express();
const userRouter = require('./routes/users.route')


app.get('/', (req, res) => {
  res.send('<h1>Welcome to my server!!!</h1>');
  res.end();
});

app.use('/api/user', userRouter);

app.use('/register', (req, res) => {
  // res.status(200).json({
  //   "success": true,
  //   "message": "Registration successful"
  // })
  res.redirect('/login')
})
app.use('/login', (req, res) => {
  res.send('<h1>Login page</h1>');
})

app.use((req, res) => {
  res.send('<h1>Ooops! Page Not Found</h1>')
})



module.exports = {
  app
};