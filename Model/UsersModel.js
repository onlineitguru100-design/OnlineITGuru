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
    name: {
        type: String,
        default: null
    },
    
}, { timestamps: true });


module.exports = mongoose.model("Users", usersSchema)