const User = require('../models/user.model')
const { v4: uuidv4 } = require('uuid');

// get all users
const getAllUsers = async(req, res) => {

 try {
   const users = await User.find();

   res.status(200).json(users);
 } catch (error) {
  res.status(500).send(error.message)
 }
};

// get single user by id
const getSingleUser = async(req, res) => {
  const { id } = req.params;

  try {
    const user = await User.find({ id: id })
     res.status(200).json(user);
  } catch (error) {
      res.status(500).send(error.message);
  }

 
};
const createUser = async (req, res) => {
 try {
   const newUser = new User({
     id: uuidv4(),
     name: req.body.name,
     email: req.body.email,
   });

   await newUser.save();

   res.status(201).json(newUser);
 } catch (error) {
  res.status(500).send(error.message)
 }
};
const updateUser = (req, res) => {
    const { id } = req.params;
  res.status(200).json({
    message: `User ${id} updated successfully`,
  });
};
const deleteUser = (req, res) => {
    const { id } = req.params;
  res.status(200).json({
    message: `User ${id} deleted successfully`,
  });
};


module.exports = { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };