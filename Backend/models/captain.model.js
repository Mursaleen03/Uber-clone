const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength:[3, "First name must be at least 3 characters long"],
        },
        lastname: {
            type: String,
            required: false, // lastname is optional
            minlength:[3, "Last name must be at least 3 characters long"],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [6, "Password must be at least 6 characters long"]
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'banned'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "color must be at least 3 characters long"],
        },
        plate: {
            type: String,
            required: true,
            unique: true,
            minlength: [3, "plate must be at least 3 characters long"],
            match: [/^[A-Z0-9]{1,10}$/, "Please enter a valid vehicle plate number"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "capacity must be at least 1"],
            max: [100, "Capacity cannot exceed 100"]
        },
        type: {
            type: String,
            required: true,
            enum: {
                values: ['car', 'bike', 'auto', 'van'],
                message: "type must be either car, bike, or auto, or van"
            }
        },
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel;