const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.get('/', (req, res) => { 
  res.send('Hello from my server!');
})


app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
