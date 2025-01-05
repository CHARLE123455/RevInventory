const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwtConfig');

//Authenticate JWT

exports.authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(403).json({ message: "No token, authorization denied" });

    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        res.status(403).json({ message: "Token is not valid" });
    }
};

// authorize admin access
exports.authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: "You are not authorized to access section" });
    }
    next();
};
