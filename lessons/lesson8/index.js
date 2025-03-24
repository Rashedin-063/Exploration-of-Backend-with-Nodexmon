const http = require('http');
const fs = require('fs');
const PORT = 63636;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
  console.log(req.url)

  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
res.
    })
  }
  
  res.end('welcome to the server')
})

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`)
  
})

