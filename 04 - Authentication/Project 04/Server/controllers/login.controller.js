require("dotenv").config();
const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getLoginPage = (req, res) => {
  res.status(200).json({ message: 'Login page' });
};

const loginUser = async(req, res) => {
  const { username, password } = req.body;
 try {
   const user = await User.findOne({ username })
    if (!user) {
      return res.status(400).json({ message: 'Invalid username' });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      } else {

          const payload = {
            id: user._id,
            username: user.username,
          };

       const token = jwt.sign(payload, process.env.SECRET_KEY, {
         expiresIn: '2d',
       });

        res.status(200).json({
          success: true,
          message: 'User logged in successfully',
          token: 'Bearer ' + token,
          data: user,
        });
      }
    }
 } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  } 
 }


module.exports = {
  getLoginPage,
  loginUser
};