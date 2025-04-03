const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const chalk = require('chalk');


app.use(morgan('dev'))

console.log(chalk.green('Success!'));

console.log(chalk.redBright('This is red console'))

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));



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
// app.post('/products', (req, res) => {
//   res.status(201).send("new product created successfully")
// })

app.listen(PORT, () => {
  console.log(chalk.greenBright.bgRedBright.underline.bold(`The Server is Running at ${PORT}`));
  
})
