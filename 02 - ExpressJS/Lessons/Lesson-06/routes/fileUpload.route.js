const express = require('express')
const { formRoute, uploadFile } = require('../controllers/fileUpload.controllers')
const upload = require('../middleware/upload.middleware')

const router = express.Router()

router.get('/register', formRoute)
router.post('/register', upload.single('image'), uploadFile)

module.exports = router