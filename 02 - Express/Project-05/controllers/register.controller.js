
const registerUser = async(req, res) => {
  try {
    const { name, email, password, dob } = req.body;

    const newUser = {
      name, email, password, dob
    }

    res.status(201).send({
      message: 'User created successfully',
      user: newUser
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
};


module.exports = {
  registerUser
}