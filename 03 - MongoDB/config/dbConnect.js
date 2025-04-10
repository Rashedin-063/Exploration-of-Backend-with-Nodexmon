const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('mongodb connection established');
  } catch (error) {
    console.error({ message: error.message });
    process.exit(1);
  }
};

module.exports = dbConnect;
