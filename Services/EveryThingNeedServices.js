const WhyChooseUs = require('../Model/EveryThingNeedModel');

// Create
exports.createWhyChooseUs = async (data) => {
  return await WhyChooseUs.create(data);
};

// Get Latest
exports.getWhyChooseUs = async () => {
  return await WhyChooseUs.findOne().sort({ createdAt: -1 });
};

// Get All
exports.getAllWhyChooseUs = async () => {
  return await WhyChooseUs.find().sort({ createdAt: -1 });
};

// Update
exports.updateWhyChooseUs = async (id, data) => {
  return await WhyChooseUs.findByIdAndUpdate(id, data, { new: true });
};

// Delete
exports.deleteWhyChooseUs = async (id) => {
  return await WhyChooseUs.findByIdAndDelete(id);
};


// exports.createEveryThingNeed = async (header, title, description, everythingNeed ) => {
//   try {

// // const existingCategory = await everyThingNeedModel.findOne({ title: { $regex: new RegExp(`^${title}$`, 'i') } });

// //     if (existingCategory) {
// //       throw new Error('Explore Course with this title already exists');
// //     }

//  if (!title || !header || !description) {
//       return res.status(400).json({ error: " Title and Image URL are required" });
//     }
//      if (!everythingNeed || !Array.isArray(everythingNeed) || everythingNeed.length === 0) {
//       throw new Error("EverythingNeed must be a non-empty array");
//     }
//     const everyThingNeed = new everyThingNeedModel({
//       header, title, description, everythingNeed 
//     });

//     return await everyThingNeed.save();
// return everyThingNeed;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// exports.getAllEveryThingNeed = async () => {
//   try {
//     return await everyThingNeedModel.find();
//   } catch (error) {
//     throw new Error('Erorr Fetchhing EveryThingNeed' + error.message)
//   }
// };