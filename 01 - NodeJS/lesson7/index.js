const http = require('http');
const fs = require('fs');
const PORT = 63636;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {

  console.log(req.url)
  
  
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      if (err) console.log('error reading data');

      res.writeHead(statusCode, { 'content-type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  if (req.url === '/') {
  handleReadFile(200, './views/index.html')
  } else if (req.url === '/about') {
  handleReadFile(200, './views/about.html')
  } else if (req.url === '/contact') {
  handleReadFile(200, './views/contact.html')
  } else {
  handleReadFile(404, './views/error.html')
  }
})

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`)
  
})

