const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/usersTestDB');
    console.log('db is connected');
  } catch (error) {
    console.log('db is not connected');
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
