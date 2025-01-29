const jwt = require('jsonwebtoken');

//JWT Configuration

const generateToken = (user) => {
    return jwt.sign({ id: user.id,role:user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    
};
const verifyToken = (token) => {
    try{
        return jwt.verify(token, process.env.JWT_SECRET_KEY);
    }
    catch(e){
        throw new Error('Invalid or expired token');
    }
    
};

module.exports = {
    generateToken,
    verifyToken
};