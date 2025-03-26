require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const myMiddleWare = (req, res, next) => {

  req.currentTime = new Date(Date.now()).toISOString()


 next()
}

const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

// app.use((req, res, next) => {
//   res.send("404 bad url request")
// })

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.get('/', myMiddleWare, (req, res) => {
console.log("I am home", req.currentTime)

  res.send('<h1>Welcome to Home Route</h1>');
});

app.get('/middleware', (req, res) => {
  let responseText = 'Hello World!<br>';
  responseText += `<small>Requested at: ${req.requestTime}</small>`;
  res.send(responseText);
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
