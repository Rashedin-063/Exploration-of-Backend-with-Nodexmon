const express = require('express');

const app = express();
const PORT = 3000;

const fileUploadRouter = require('./routes/fileUpload.route')



app.get('/', (req, res) => {
  res.status(200).send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <h1>Welcome to my server from lesson 6</h1>
    </div>
  `);
});


app.use('/', fileUploadRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
  
})
