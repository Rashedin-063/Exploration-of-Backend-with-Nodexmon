const User = require("../model/existingData.model");

const getAllExistingData = async (req, res) => {
  
  const users = await User.find()

  res.send(users);
};


module.exports = {
  getAllExistingData
}