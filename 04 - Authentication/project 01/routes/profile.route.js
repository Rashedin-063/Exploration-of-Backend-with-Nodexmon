const express = require('express');
const { getProfile } = require('../controller/profile.controller');

const router = express.Router();

// Profile route
router.get('/', getProfile);

module.exports = router;