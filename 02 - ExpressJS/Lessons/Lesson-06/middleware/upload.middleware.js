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

module.exports = upload;