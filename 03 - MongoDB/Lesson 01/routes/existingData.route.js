const express = require('express');
const { getAllExistingData } = require('../controllers/existingData.controller');
const router = express.Router();


router.get('/', getAllExistingData)


module.exports = router