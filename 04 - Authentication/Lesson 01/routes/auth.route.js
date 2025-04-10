const express = require('express');
const router = express.Router();


router.get('/', (req, res) => { 
  res.status(200).json({
    message: "Welcome to the authentication API",
  })
})


router.post('/', (req, res) => { 
  res.status(201).json({
    message: "User registered successfully",
  })
})


module.exports = router;