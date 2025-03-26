const express = require('express');
const app = express();
const PORT = 3000;

// app.get('/', (req, res) => {
//   const {id, name} = req.query
//   // const name = req.query.name;
//   res.send(`<h1>Student name is ${name} and his id is ${id}</h1>`);
// })

app.get('/userId/:id/age/:age', (req, res) => {
  const { id, age } = req.params;

  res.send(`<h1>Student id  ${id} is ${age} years old</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
