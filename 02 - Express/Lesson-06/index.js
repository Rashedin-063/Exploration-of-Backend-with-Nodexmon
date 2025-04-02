const express = require('express');
const multer = require('multer');
const app = express();

const PORT = 3000;


// file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.status(200).send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <h1>Welcome to my server from lesson 6</h1>
    </div>
  `);
});

app
  .route('/register')
  .get((req, res) => {
    // res.send('<h1>Welcome to my server from register</h1>');
    res.status(200).sendFile(__dirname + '/index.html');
  })
  .post(upload.single('image'), (req, res) => {
    res.send({ message: 'file is uploaded successfully' });
  });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
  
})
