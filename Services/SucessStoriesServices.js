const sucessStore = require("../Model/SucessStoreModel");

exports.createSucessStore = async (data) => {
  return await sucessStore.create(data);
};

exports.getAllSucessStore = async () => {
  return await sucessStore.find().sort({ createdAt: -1 });
};

exports.getSucessStoreById = async (id) => {
  return await sucessStore.findById(id);
};

exports.updateSucessStore = async (id, data) => {
  return await sucessStore.findByIdAndUpdate(id, data, {
    new: true,
  });
};

exports.deleteSucessStore = async (id) => {
  return await sucessStore.findByIdAndDelete(id);
};