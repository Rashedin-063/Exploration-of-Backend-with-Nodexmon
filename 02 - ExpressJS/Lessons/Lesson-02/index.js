const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

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

app.get('/register', (req, res) => {

  res.sendFile(__dirname + '/views/index.html');
})

app.post('/register', (req, res) => {

    const { fullName, email } = req.body;

    // console.log(fullName, email);
    // console.log('req body', req.body);

 res.send(`<h1>Student name is ${fullName} and his email is ${email}`)
})


// getting data from req.body using body parser

// app.post('/user', (req, res) => {
//   const { name, age } = req.body;

//   res.send(`Welcome Mr. ${name} with ${age} years old`)
// })

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
