
const registerUser = async(req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    res.status(201).send({
      message: 'User created successfully',
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