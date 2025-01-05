const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {JWT_SECRET} = require('../config/jwtConfig');


// register user service
exports.registerUser = async(email, password,role) => {
    const encryptedPassword = await bcrypt.hash(password, 10);
    return await User.create({email, password: encryptedPassword, role});
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
    const token = jwt.sign({id: user.id, role: user.role}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
    return {user, token};
    };