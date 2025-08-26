const User = require('../models/User.js');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ username, email, password });
        const { password: pw, ...userData } = user._doc;
        res.status(201).json(userData);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};