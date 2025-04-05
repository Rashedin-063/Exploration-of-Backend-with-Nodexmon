const express = require('express');
const app = express();

const dbConnect = require('./utils/dbConnect');
const PORT = 3000;


dbConnect()

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
