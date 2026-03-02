const expertService = require("../Services/OurExpertsServices");

// Create
exports.createExpert = async (req, res) => {
  try {
    const expert = await expertService.createOurExpert(req.body);

    res.status(201).json({
      success: true,
      message: "Expert created successfully",
      data: expert,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All
exports.getAllExperts = async (req, res) => {
  try {
    const experts = await expertService.getAllOurExperts();

    res.json({
      success: true,
      count: experts.length,
      data: experts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single
exports.getExpertById = async (req, res) => {
  try {
    const expert = await expertService.getOurExpertById(req.params.id);

    if (!expert) {
      return res.status(404).json({
        success: false,
        message: "Expert not found",
      });
    }

    res.json({
      success: true,
      data: expert,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update
exports.updateExpert = async (req, res) => {
  try {
    const expert = await expertService.updateOurExpert(
      req.params.id,
      req.body
    );

    if (!expert) {
      return res.status(404).json({
        success: false,
        message: "Expert not found",
      });
    }

    res.json({
      success: true,
      message: "Expert updated successfully",
      data: expert,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete
exports.deleteExpert = async (req, res) => {
  try {
    const expert = await expertService.deleteOurExpert(req.params.id);

    if (!expert) {
      return res.status(404).json({
        success: false,
        message: "Expert not found",
      });
    }

    res.json({
      success: true,
      message: "Expert deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};