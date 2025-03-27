const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(express.json());

app.use(cors());

app.use(express.static('public'))


// home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// invalid route
app.use((req, res, next) => {
  res.status(404).json({ message: 'Invalid route' });
})

module.exports = app;