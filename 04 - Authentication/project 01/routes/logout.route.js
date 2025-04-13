const express = require('express');
const { logoutUser } = require('../controller/logout.controller');

const router = express.Router();

router.get('/', logoutUser)


module.exports = router;