const usersService = require('../Services/UsersServices')
const usersModel = require('../Model/UsersModel')
const mongoose = require('mongoose')


exports.userRegister = async (req, res) => {
    try {
        const { email, password, name, loginType} = req.body;
        const user = await usersService.registerUser({ email, password, name, loginType});
        res.status(200).json({ success: true, message: 'User Successfully Registered', user });
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

exports.getUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;

        // const userIdFromToken = req.user.userId; 

        if (!mongoose.isValidObjectId(userId)) {
            return res.status(400).json({ success: false, error: "Invalid user ID" });
        }


        // if (userId !== userIdFromToken) {
        //     return res.status(403).json({ error: "Unauthorized: Cannot access another user's profile" });
        // }

        const user = await usersService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' })
        }
        res.status(200).json({ success: true, user })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


