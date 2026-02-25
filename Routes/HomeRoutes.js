const express = require('express');
const router = express.Router();
const homeController = require('../Controller/HomeController');
//const authMiddleware = require("../middleware/authMiddleware");

router.get('/homepage',homeController.gethome);//authMiddleware, 
module.exports = router;