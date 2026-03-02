const express = require("express");
const router = express.Router();
const ourApproachController = require("../Controller/OurApproachController");

// Create Journey Section
router.post("/create", ourApproachController.createJourney);

// Get Journey Section
router.get("/", ourApproachController.getJourney);

// Add Step
router.post("/add-step/:id", ourApproachController.addStep);

// Update Step
router.put("/update-step/:id/:stepId", ourApproachController.updateStep);

// Delete Step
router.delete("/delete-step/:id/:stepId", ourApproachController.deleteStep);

module.exports = router;