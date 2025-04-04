
const registerUser = (req, res) => {
  res.status(201).send({
    message: 'User created successfully',
  });
};


module.exports = {
  registerUser
}