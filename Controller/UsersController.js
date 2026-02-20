const usersService = require('../Services/UsersServices')
const usersModel = require('../Model/UsersModel')
const mongoose = require('mongoose')


exports.userRegister = async (req, res) => {
    try {
        const { email, password, name} = req.body;
        const user = await usersService.registerUser({ email, password, name});
        res.status(201).json({ success: true, message: 'User Successfully Registered', user });
    } catch (error) {
         if (error.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "UserName already registered"
    });
  }
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usersService.loginUser({ email, password });
        res.status(200).json({ success: true, messsage: 'Login Sucessfully', user })
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ success: false, error: error.messsage });
    }
};



