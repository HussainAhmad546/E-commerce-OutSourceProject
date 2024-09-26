const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Make sure to import your User model
require('dotenv').config();
const SECRET_KEY = process.env.CLIENT_SECRET_KEY;

const verifyToken = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization; 
    console.log("Authorization Header:", authorizationHeader);

// Check the Authorization header
    if (!authorizationHeader) {
        return res.status(403).json({ message: 'Token not found, Authentication denied' });
    }
    const token = authorizationHeader.split(' ')[1]; 
    console.log("Token:", token);
    if (!token) {
        return res.status(403).json({ message: 'Token not found, Authentication denied' });
    }
    try {
        const decode = jwt.verify(token, SECRET_KEY); // Verify the token
        req.userID = decode.id; // Set userID in request object

        // Fetch the user from the database
        const user = await User.findById(req.userID);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        req.user = user; // Attach the user object to the request
        next(); // Call the next middleware
    } catch (error) {
        return res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = verifyToken;
