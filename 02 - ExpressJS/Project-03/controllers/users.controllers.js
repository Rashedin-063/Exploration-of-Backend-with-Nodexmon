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


// update a user
const updateUser = (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;
  
  let selectedUser = users.find(user => user.id === id);
 if (selectedUser) {
   selectedUser.username = username;
   selectedUser.email = email;
 }

  // users.filter((user) => user.id === id).map(selectedUser => {
  //   selectedUser.username = username;
  //   selectedUser.email = email;
  // })
  
 
   res.status(200).json(users);

};

// delete a user
const deleteUser = (req, res) => { 
  const id = req.params.id;
  
  const filteredUsers = users.filter((user) => user.id !== id)

  res.status(200).json(filteredUsers);
}



module.exports = {getUsers, createUser , updateUser, deleteUser}