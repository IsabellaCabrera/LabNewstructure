const express = require('express');
const router = express.Router();
const { getAllUsers, loginUser, registerUser } = require('../controllers/users.controller.js');

// Get all users
router.get('/users', getAllUsers);

// Login user
router.post('/login', loginUser);

// Register user
router.post('/register', registerUser);

module.exports = router;