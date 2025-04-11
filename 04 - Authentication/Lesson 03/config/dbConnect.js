const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    if (!DB_URI) {
      throw new Error('DB_URI is not found');
    }

    await mongoose.connect(DB_URI);

    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;