const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { verifyToken, generateToken } = require('../config/jwtConfig');


// register user service
exports.registerUser = async(name,email, password,role) => {
    const encryptedPassword = await bcrypt.hash(password, 10);
    return await User.create({name,email, password: encryptedPassword, role});
};

// login user service
exports.loginUser = async(email, password) => {
    const user = await User.findOne({where: {email}});
    if (!user) {
        throw new Error('User not found');
    };
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    };
    const token = generateToken(user);

    return {user, token};
    };