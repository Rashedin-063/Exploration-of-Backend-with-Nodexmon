require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path')
const authRouter = require('./router/auth.routes')

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use(authRouter)

app.get('/', (req, res) => {
  res.send('Welcome to Express Project 6');
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 

