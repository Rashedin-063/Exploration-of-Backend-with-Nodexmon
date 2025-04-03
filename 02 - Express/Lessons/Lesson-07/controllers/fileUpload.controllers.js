const path = require('path');
const User = require('../models/fileUpload.models');


const formRoute = (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/../views/index.html'));
};

const uploadFile = async(req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      image: req.file.filename
    })
    await newUser.save()
  res.status(201).send(newUser);
 } catch (error) {
  res.status(500).send(error.message);
 }
};




module.exports = {formRoute, uploadFile}