const path = require('path');


const formRoute = (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/../views/index.html'));
};

const uploadFile = (req, res) => {
 res.status(201).send({ message: 'File uploaded successfully' });
};




module.exports = {formRoute, uploadFile}