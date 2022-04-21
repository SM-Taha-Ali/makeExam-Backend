const express = require('express');
const router = express.Router();

// Importing controller

const authController = require('../controllers/questionbank.js');

// Creating User

router.post(
    // Route Path
    '/create-paper',
    // Creating User
    authController.writePaper
)

router.get(
    // Route Path
    '/get-paper',
    // Creating User
    authController.getPaper
)

module.exports = router;