const jwt = require('jsonwebtoken');

//JWT Configuration

const jwtConfigure = {
    secret: process.env.JWT_SECRET_KEY || (() => { throw new Error('JWT_SECRET_KEY is required') })(),
    expiresIn: process.env.JWT_EXPIRES_IN
};

const generateToken = (user) => {
    return jwt.sign({ id: user.id }, jwtConfigure.secret, {
        expiresIn: jwtConfigure.expiresIn
    });
};
const verifyToken = (token) => {
    return jwt.verify(token, jwtConfigure.secret);
};

module.exports = {
    jwtConfigure,
    generateToken,
    verifyToken
};