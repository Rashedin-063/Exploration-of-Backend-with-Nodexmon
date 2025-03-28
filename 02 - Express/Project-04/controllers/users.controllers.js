

const getAllUsers = (req, res) => {
  res.status(200).json({
    message: 'All users',
  });
};
const getSingleUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `User ${id} found`,
  });
};
const createUser = (req, res) => {
  res.status(201).json({
    message: `User created successfully`,
  });
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