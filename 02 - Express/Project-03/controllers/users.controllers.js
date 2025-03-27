let users = require("../models/users.mode");
const { v4: uuidv4 } = require('uuid');

// get all users
const getUsers = (req, res) => {
  res.status(200).json({ users });
};

// create new user
const createUser = (req, res) => {
  const { userName, email } = req.body;
  const id = uuidv4();

  const newUser = { id, userName, email };
  users.push(newUser);
  res.status(200).json( users );
};



module.exports = {getUsers, createUser}