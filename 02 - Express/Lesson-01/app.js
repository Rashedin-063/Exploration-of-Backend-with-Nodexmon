const express = require('express');
const router = express.Router()
const app = express();
const userRouter = require('./routes/users.route')


app.get('/', (req, res) => {
  res.send('<h1>Welcome to my server!!!</h1>');
  res.end();
});

app.use('/api/user', userRouter)

app.use((req, res) => {
  res.send('<h1>Ooops! Page Not Found</h1>')
})



module.exports = {
  app
};