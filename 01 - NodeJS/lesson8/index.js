const http = require('http');
const fs = require('fs');

const PORT = 3000;


const myServer = http.createServer((req, res) => {

   const handleReadFile = (statusCode, fileLocation) => {
     fs.readFile(fileLocation, 'utf-8', (err, data) => {
       if (err) console.log('error reading data');

       res.writeHead(statusCode, { 'content-type': 'text/html' });
       res.write(data);
       res.end();
     });
   };

  if (req.url === '/') {
    handleReadFile(200, './views/index.html');
  } else if (req.url === '/about') {
    handleReadFile(200, './views/about.html');
  } else if (req.url === '/contact') {
    handleReadFile(200, './views/contact.html');
  } else {
    handleReadFile(404, './views/error.html');
  }

});

myServer.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)  
})