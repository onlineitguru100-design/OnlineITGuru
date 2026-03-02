const ourApproachModel = require("../Model/OurApproachModel");

// Create Journey Section
exports.createOurApproach = async (data) => {
  return await ourApproachModel.create(data);
};

// Get Latest Journey
exports.getOurApproach= async () => {
  return await ourApproachModel.findOne().sort({ createdAt: -1 });
};

// Add Step
exports.addOurApproachStep = async (journeyId, stepData) => {
  return await ourApproachModel.findByIdAndUpdate(
    journeyId,
    { $push: { steps: stepData } },
    { new: true }
  );
};

// Update Step
exports.updateOurApproachStep = async (journeyId, stepId, updateData) => {
  return await ourApproachModel.findOneAndUpdate(
    { _id: journeyId, "steps._id": stepId },
    { $set: { "steps.$": updateData } },
    { new: true }
  );
};

// Delete Step
exports.deleteOurApproachStep = async (journeyId, stepId) => {
  return await ourApproachModel.findByIdAndUpdate(
    journeyId,
    { $pull: { steps: { _id: stepId } } },
    { new: true }
  );
};