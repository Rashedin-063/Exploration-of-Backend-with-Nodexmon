const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/user.model');

const getRegisteredUser = async (req, res) => {
  res.render('register');
};

// Register Controller
// const registerUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Check if all fields are provided
//     if (!username || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) return res.status(400).json({ message: 'User already exists' });

    bcrypt.hash(password, saltRounds, async function (err, hash) {
        if (err) {
          console.error('Error hashing password:', err);
          return res
            .status(500)
            .json({ message: 'Error while hashing password' });
        }
      const newUser = new User({
      userName,
      email,
      password: hash,
    });

    await newUser.save();

    res.status(201).redirect('/login');
    });

   
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message ? error.message : 'Server error',
      data: null,
    });
  }
};

module.exports = { registerUser, getRegisteredUser };
