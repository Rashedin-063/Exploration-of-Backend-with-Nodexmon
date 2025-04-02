const express = require('express')
const { formRoute, uploadFile } = require('../controllers/fileUpload.controllers')

const router = express.Router()

router.get('/register', formRoute)
router.post('/register', uploadFile)

module.exports = router