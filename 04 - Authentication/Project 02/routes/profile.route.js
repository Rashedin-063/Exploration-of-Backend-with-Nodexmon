const express = require('express');
const { getProfile } = require('../controller/profile.controller');
const checkIsAuthenticated = require('../middlewares/checkIsAuthenticated');

const router = express.Router();

// Profile route
router.get('/', checkIsAuthenticated, getProfile);

module.exports = router;
