const mongoose = require('mongoose');
const config = require('./config');
const uri = config.db.uri

mongoose
  .connect(uri)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })


