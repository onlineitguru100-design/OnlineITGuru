const usersModel = require('../Model/UsersModel')

//const bcrypt = require('bcrypt')

exports.isEmailRegistered = async (email) => {
    const existingUser = await usersModel.findOne({email});
    return existingUser;
}

exports.isAdminEmailRegistered = async (email) => {
    const existingUser = await adminModel.findOne({email});
    return existingUser;
}