const userModel = require("../models/user.model");

module.exports.createUser = async ({
    fullname,
    email,
    password,
}) => {
    if (!fullname?.firstname || !email || !password) {
        throw new Error('Missing required fields');
    }

    const user = await userModel.create({
        fullname,
        email,
        password,
    });

    return user;
};
