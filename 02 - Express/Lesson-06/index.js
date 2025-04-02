const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <h1>Welcome to my server from lesson 6</h1>
    </div>
  `);
});
app.get('/register', (req, res) => {
  // res.send('<h1>Welcome to my server from register</h1>');
  res.status(200).sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
  
})
