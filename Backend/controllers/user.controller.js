const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require('express-validator');
const blacklistTokenModel = require("../models/blacklistToken.model");


module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {fullname, email, password} = req.body;
        const isUserExists = await userModel.find({email});
        if (isUserExists.length > 0) {
            return res.status(400).json({message: 'User already exists'});
        }

        // Validate fullname structure
        if (!fullname || typeof fullname !== 'object' || !fullname.firstname) {
            return res.status(400).json({
                error: 'Invalid fullname format. Please provide fullname as an object with firstname field'
            });
        }

        const hashedPassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname || ''
            },
            email,
            password: hashedPassword,
        });

        const token = user.generateAuthToken()
        res.status(201).json({token, user});
    } catch (error) {
        next(error);
    }
}
module.exports.loginUser = async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const {email, password} = req.body;
    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({error: 'Invalid email or password'});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({error: 'Invalid email or password'});
    }
    const token = user.generateAuthToken();
    // Set the token in a cookie
    res.cookie('token', token)

    res.status(200).json({token, user})

}

module.exports.getUserProfile = async (req, res, next) =>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    // Clear the cookie
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistTokenModel.create({token});
    res.status(200).json({message: 'Logged out successfully'});
}