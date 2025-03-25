const http = require('http');
const fs = require('fs');
const PORT = 63636;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
  console.log(req.url)

  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) console.log('error reading data')
      
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    })
  }
  // about route
  if (req.url === '/about') {
    fs.readFile('about.html', (err, data) => {
      if (err) console.log('error reading data')
      
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    })
  }
  // contact route
  if (req.url === '/contact') {
    fs.readFile('contact.html', (err, data) => {
      if (err) console.log('error reading data')
      
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    })
  }
})

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`)
  
})

