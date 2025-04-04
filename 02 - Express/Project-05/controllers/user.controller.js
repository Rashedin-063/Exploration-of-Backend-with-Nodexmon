

const getAllUsers = (req, res) => {
  res.status(200).json({
    message: 'Users data is available',
  });
};

module.exports = {getAllUsers}