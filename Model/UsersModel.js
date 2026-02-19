const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // name: {
    //     type: String,
    //     required: true, 
    //     unique: true
    // },
    // mobile: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // address: {
    //     type: String,
    //     default: null
    // },
    // pincode: {
    //     type: String,
    //     default: null
    // },
    // imageUrl: {
    //     type: String,
    //     default: ''
    // }
}, { timestamps: true });


module.exports = mongoose.model("Users", usersSchema)