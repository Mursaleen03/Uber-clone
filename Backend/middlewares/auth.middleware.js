const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Authentication token is missing" });
    }

    // Check if the token is blacklisted
    const isblacklisted = await blacklistTokenModel.findOne({ token });
    if (isblacklisted) {
        res.status(401).json({ message: "Unauthorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Use the correct property for user id in your JWT payload
        const userId = decoded._id || decoded.id || decoded.userId;
        if (!userId) {
            return res.status(401).json({ error: "Invalid token payload" });
        }
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
}
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if the token is blacklisted
    const isblacklisted = await blacklistTokenModel.findOne({ token });
    if (isblacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captainId = decoded._id;
        if (!captainId) {
            return res.status(401).json({ error: "Invalid token payload" });
        }
        const captain = await captainModel.findById(captainId);
        if (!captain) {
            return res.status(401).json({ error: "Captain not found" });
        }
        req.captain = captain;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};

