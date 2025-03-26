const path = require('path');
const users = require("../models/users.model");

exports.getUsers = (req, res) => {
  console.log('dirname', __dirname)
  
  res.sendFile(path.join(__dirname + '/../views/index.html'));
};

exports.saveUser =  (req, res) => {
  const { name, email } = req.body;

  const newUser = { id: new Date(), name, email };

  users.push(newUser);

  res.status(201).json({
    success: true,
    users,
  });
}













