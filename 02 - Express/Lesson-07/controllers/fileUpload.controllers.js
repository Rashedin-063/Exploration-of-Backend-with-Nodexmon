const path = require('path');


const formRoute = (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/../views/index.html'));
};

const uploadFile = async(req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      image: req.file.filename
    }
  res.status(201).send({ message: 'File uploaded successfully' });
 } catch (error) {
  
 }
};




module.exports = {formRoute, uploadFile}