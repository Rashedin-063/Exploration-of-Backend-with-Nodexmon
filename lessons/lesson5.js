const http = require('http');

const port = 5000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) => {
   res.writeHead(202, { 'Content-Type': 'text/html' });
   res.write('<h1>hello</h1>');
   res.write('<h1>hello</h1>');
   res.write('<h1>hello</h1>');
  res.end("hello from you first server")
})


myServer.listen(5000, () => {
  console.log(`Server is running successfully at  at http://${hostname}:${port}`);
})




