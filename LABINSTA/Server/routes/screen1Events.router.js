const express = require('express');
const path = require('path');
const router = express.Router();
const { getAllPosts, createPost } = require('../controllers/screen1Events.controller.js');

// Get all posts
router.get('/posts', getAllPosts);

// Create a post
router.post('/create-post', createPost);

// Routes for the client pages
router.get('/client-1', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'index.html'));
});

router.get('/client-2', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client2', 'index.html'));
});

module.exports = router;