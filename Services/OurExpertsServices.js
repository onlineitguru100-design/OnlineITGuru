const ourExpertsModel = require("../Model/OurExpertsModel");

// Create Expert
exports.createOurExpert = async (data) => {
  return await ourExpertsModel.create(data);
};

// Get All Experts
exports.getAllOurExperts = async () => {
  return await ourExpertsModel.find().sort({ createdAt: -1 });
};

// Get Single Expert
exports.getOurExpertById = async (id) => {
  return await ourExpertsModel.findById(id);
};

// Update Expert
exports.updateOurExpert = async (id, data) => {
  return await ourExpertsModel.findByIdAndUpdate(id, data, { new: true });
};

// Delete Expert
exports.deleteOurExpert = async (id) => {
  return await ourExpertsModel.findByIdAndDelete(id);
};