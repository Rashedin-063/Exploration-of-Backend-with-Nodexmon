const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users.route')

const app = express();
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(express.json());

app.use(cors());

app.use(express.static('public'))

// api/users : GET
// api/users/:id : GET
// api/users : POST
// api/users/:id : PATCH
// api/users/:id : DELETE
app.use('/api/users', userRouter)


// home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


module.exports = app;