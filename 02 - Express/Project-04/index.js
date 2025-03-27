require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// home route
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to My API</h1> <p>Version: ${process.env.API_VERSION}</p>`);
});

// invalid route
app.use((req, res, next) => {
  res.status(404).json({ message: 'Invalid route' });
});
// server error
app.use((err, req, res, next) => {
  res.status(404).json({ message: 'Something broke' });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
