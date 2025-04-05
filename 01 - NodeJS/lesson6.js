const http = require('http');

const port = 5000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) => {
  // res.statusCode = 200
  res.writeHead(202, {'Content-Type': 'text/html'});
  res.write("<h1>hello from your second server</h1>");
  res.write("<h1>hello from your second server</h1>");
  res.write("<h1>hello from your second server</h1>");
  res.end();
})


myServer.listen(5000, () => {
  console.log(`Server is running successfully at  at http://${hostname}:${port}`);
})




