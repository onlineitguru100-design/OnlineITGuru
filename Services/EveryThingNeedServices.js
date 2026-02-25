const everyThingNeedModel = require('../Model/EveryThingNeedModel');

exports.createEveryThingNeed = async (title, description, imageUrl) => {
  try {

// const existingCategory = await everyThingNeedModel.findOne({ title: { $regex: new RegExp(`^${title}$`, 'i') } });

//     if (existingCategory) {
//       throw new Error('Explore Course with this title already exists');
//     }

 if (!title || !imageUrl) {
      return res.status(400).json({ error: " Title and Image URL are required" });
    }
    
    const everyThingNeed = new everyThingNeedModel({
      title,
      description,
      imageUrl
    });

    return await everyThingNeed.save();
return everyThingNeed;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllEveryThingNeed = async () => {
  try {
    return await everyThingNeedModel.find();
  } catch (error) {
    throw new Error('Erorr Fetchhing EveryThingNeed' + error.message)
  }
};