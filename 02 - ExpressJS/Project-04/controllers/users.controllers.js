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
    const user = await User.findOne({ id: id })
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

// update user
const updateUser = async(req, res) => {
  const { id } = req.params;
  const { name, email} = req.body;

 try {
   const user = await User.findByIdAndUpdate(
     id,
     { $set: { name: name, email: email } },
     { new: true }
   );
   res.status(200).json(user);
 } catch (error) {
   res.status(500).send(error.message);
 }
};

// delete a user
const deleteUser = async(req, res) => {
   const { id } = req.params;

   try {
     await User.deleteOne({ id: id });
     res.status(200).json({message: 'User is deleted successfully'});
   } catch (error) {
     res.status(500).send(error.message);
   }
};


module.exports = { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };