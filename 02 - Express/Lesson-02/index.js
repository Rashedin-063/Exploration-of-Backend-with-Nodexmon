const express = require('express');
const app = express();
const PORT = 3000;

// query
// app.get('/', (req, res) => {
//   const {id, name} = req.query
//   // const name = req.query.name;
//   res.send(`<h1>Student name is ${name} and his id is ${id}</h1>`);
// })

// params
// app.get('/userId/:id/age/:age', (req, res) => {
//   const { id, age } = req.params;

//   res.send(`<h1>Student id  ${id} is ${age} years old</h1>`);
// });

// headers
app.get('/', (req, res) => {
  const { id, name } = req.headers

  console.log(id, name, req.headers)
  
  
  
  res.send(`<h1>Student name is ${name} and his id is ${id}</h1>`);
})

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
