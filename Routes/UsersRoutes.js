const express = require('express')
const router = express.Router();
const userController = require('../Controller/UsersController')
router.post('/register', userController.userRegister);
router.post('/login', userController.loginUser);
router.get('/profile/:userId', userController.getUserProfile);
module.exports = router;