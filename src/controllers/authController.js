const AuthService = require('../services/authService');

// register user controller

exports.registerUser = async (req, res) => {
    try {
        const {name, email, password, role } = req.body;
        const user = await AuthService.registerUser(name,email, password, role);
        res.status(201).json({user,token});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// login user controller

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const {user, token} = await AuthService.loginUser(email, password);
        res.status(200).json({user,token});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};