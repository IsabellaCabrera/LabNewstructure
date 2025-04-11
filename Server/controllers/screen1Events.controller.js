const { posts } = require('../db/users.db.js');

const getAllPosts = (req, res) => {
    res.status(200).json({ success: true, posts });
};

const createPost = (req, res) => {
    const { img, title, desc } = req.body;
    posts.push({ img, title, desc });
    res.status(200).json({ success: true, message: 'Post created' });
};

module.exports = {
    getAllPosts,
    createPost
};