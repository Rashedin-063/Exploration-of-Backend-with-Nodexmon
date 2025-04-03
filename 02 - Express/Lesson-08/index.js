const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');


app.use(morgan('dev'))


app.get('/', (req, res) => {
  res.status(200).send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <h1>Welcome to my server from lesson 8</h1>
    </div>
  `);
});

app.get('/products', (req, res) => {
  res.send("List all the products")
})
app.post('/products', (req, res) => {
  res.status(201).send("new product created successfully")
})

app.listen(PORT, () => {
  console.log(`The Server is Running at ${PORT}`);
  
})
