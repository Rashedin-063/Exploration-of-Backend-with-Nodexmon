
const app = require('./app')
const config = require('./config/config')
const PORT = config.app.port




// invalid route
app.use((req, res, next) => {
  res.status(404).json({ message: 'Invalid route' });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Something broke' });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
