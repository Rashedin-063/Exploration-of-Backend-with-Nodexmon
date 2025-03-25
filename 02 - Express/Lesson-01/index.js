const { app } = require('./app');
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})

