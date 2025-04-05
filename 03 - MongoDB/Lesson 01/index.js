const express = require('express');
const app = express();

const dbConnect = require('./config/dbConnect');
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const existingDataRoute = require('./routes/existingData.route')
const productsRoute = require('./routes/products.route')

dbConnect()

app.use('/users', existingDataRoute)
app.use('/products', productsRoute)

// basic home route
app.get('/', (req, res) => {
  res.status(200).send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <h1>Welcome to my server from mongoDB lesson 1</h1>
    </div>
  `);
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})
