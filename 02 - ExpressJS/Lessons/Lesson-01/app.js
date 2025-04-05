const express = require('express');
const router = express.Router()
const app = express();
const userRouter = require('./routes/users.route')



app.use('/api/user', userRouter);



app.get('/', (req, res) => {
  // res.send('<h1>Welcome to my server!!!</h1>');
  // res.end();

  res.statusCode = 200;
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/register', (req, res) => {
  // res.status(200).json({
  //   "success": true,
  //   "message": "Registration successful"
  // })
  // res.redirect('/login')

  res.statusCode = 200;
  res.sendFile(__dirname + '/views/register.html');

})
app.use('/login', (req, res) => {
  // res.send('<h1>Login page</h1>');

  // res.cookie("name", "sraboni")
  // res.cookie("age", "30")
  res.clearCookie("name");
  res.clearCookie("age");

  res.append("id", "1300000")

  //  res.statusCode = 200;
  // res.sendFile(__dirname + '/views/login.html');
  res.end()
})

app.use((req, res) => {
  res.send('<h1>Ooops! Page Not Found</h1>')

  
})



module.exports = {
  app
};