const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users.route')

const app = express();
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(express.json());

app.use(cors());

app.use(express.static('public'))

app.use(userRouter)

// home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});



module.exports = app;