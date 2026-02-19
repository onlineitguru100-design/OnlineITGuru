const express = require('express')
const router = express.Router();
const userController = require('../Controller/UsersController')
router.post('/register', userController.userRegister);
router.post('/login', userController.loginUser);
module.exports = router;