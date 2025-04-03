const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.status(200).send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <h1>Welcome to my server from lesson 8</h1>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`The Server is Running at ${PORT}`);
  
})
