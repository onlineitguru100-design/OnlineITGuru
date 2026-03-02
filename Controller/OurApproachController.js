const ourApproachServices = require("../Services/OurApproachServices");

// Create
exports.createJourney = async (req, res) => {
  try {
    const journey = await ourApproachServices.createOurApproach(req.body);
    res.status(201).json({
      success: true,
      message: "Journey section created successfully",
      data: journey,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get
exports.getJourney = async (req, res) => {
  try {
    const journey = await ourApproachServices.getOurApproach();
    res.status(200).json({
      success: true,
      data: journey,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add Step
exports.addStep = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await ourApproachServices.addOurApproachStep(id, req.body);

    res.status(200).json({
      success: true,
      message: "Step added successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Step
exports.updateStep = async (req, res) => {
  try {
    const { id, stepId } = req.params;

    const updated = await ourApproachServices.updateOurApproachStep(
      id,
      stepId,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Step updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Step
exports.deleteStep = async (req, res) => {
  try {
    const { id, stepId } = req.params;

    const updated = await ourApproachServices.deleteOurApproachStep(id, stepId);

    res.status(200).json({
      success: true,
      message: "Step deleted successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};