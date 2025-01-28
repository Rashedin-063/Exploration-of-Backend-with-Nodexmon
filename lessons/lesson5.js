const http = require('http');

const port = 5000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) => {
  res.end("hello from you first server")
})


myServer.listen(5000, () => {
  console.log(`Server is running successfully at  at http://${hostname}:${port}`);
})




