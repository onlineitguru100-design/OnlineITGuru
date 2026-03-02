const express = require("express");
const router = express.Router();
const expertController = require("../Controller/OurExpertsController");

// Create Expert
router.post("/create", expertController.createExpert);

// Get All Experts
router.get("/OurExperts", expertController.getAllExperts);

// Get Single Expert
router.get("OurExperts/:id", expertController.getExpertById);

// Update Expert
router.put("OurExperts/:id", expertController.updateExpert);

// Delete Expert
router.delete("OurExperts/:id", expertController.deleteExpert);

module.exports = router;