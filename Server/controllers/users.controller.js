const { users, posts } = require('../db/users.db.js');

const getAllUsers = (req, res) => {
    res.status(200).json({ success: true, users });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    console.log(`User logged ${email, password}`);
    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Incorrect Credentials' });
    }
};

const registerUser = (req, res) => {
    const { email, name, password } = req.body;
    const userExists = users.some(user => user.email === email);

    if (!userExists) {
        users.push({ email, name, password });
        res.status(200).json({ success: true });
    } else {
        res.status(400).json({ success: false, message: 'User already exists' });
    }
};

module.exports = {
    getAllUsers,
    loginUser,
    registerUser
};