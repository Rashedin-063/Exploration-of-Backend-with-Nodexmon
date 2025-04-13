require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

// mongoose
//   .connect(uri)
//   .then(() => console.log('Connected to MongoDB!'))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   })

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}
run().catch(console.dir);



