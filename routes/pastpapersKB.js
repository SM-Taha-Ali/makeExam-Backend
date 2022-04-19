const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

// Importing controller

const authController = require('../controllers/pastpapersKB.js');
const fetchuser = require('../middlewares/fetchUser');

// Creating User

router.post(
    // Route Path
    '/create-paper',
    // Creating User
    authController.createPaper
)

router.get(
    // Route Path
    '/get-paper',
    // Creating User
    authController.getPaper
)

module.exports = router;