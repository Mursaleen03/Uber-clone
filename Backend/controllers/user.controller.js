const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require('express-validator');


module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {fullname, email, password} = req.body;

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