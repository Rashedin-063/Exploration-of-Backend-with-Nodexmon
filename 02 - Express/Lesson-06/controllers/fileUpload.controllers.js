const path = require('path');
const multer = require('multer');

// file upload 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname +  '/../upload/'));
  },
  filename: function (req, file, cb) {
   const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

const formRoute = (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/../views/index.html'));
};

const uploadFile = (req, res) => {
  upload.single('image')(req, res, function (err) {
    if (err) {
      return res
        .status(400)
        .send({ message: 'File upload failed', error: err.message });
    }
    res.send({ message: 'File uploaded successfully' });
  });
};




module.exports = {formRoute, uploadFile}