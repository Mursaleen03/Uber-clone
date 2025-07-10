const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    fullname,
    email,
    password,
    vehicle
}) => {
    if (
        !fullname?.firstname ||
        !email ||
        !password ||
        !vehicle?.color ||
        !vehicle?.plate ||
        !vehicle?.capacity ||
        !vehicle?.type
    ) {
        throw new Error('All fields are required');
    }
    const captain = new captainModel({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            type: vehicle.type
        }
    });
    await captain.save(); // <-- Save to DB
    return captain;
}