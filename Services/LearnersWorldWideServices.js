const learnersWorldWideModel = require('../Model/LearnersWorldWideModel');

exports.createLearnersWorldWide = async (trustedBy, title, description, imageUrl) => {
  try {

// const existingCategory = await everyThingNeedModel.findOne({ title: { $regex: new RegExp(`^${title}$`, 'i') } });

//     if (existingCategory) {
//       throw new Error('Explore Course with this title already exists');
//     }

 if (!trustedBy || !imageUrl || !title || !description) {
      return res.status(400).json({ error: " Title and Image URL are required" });
    }
    
    const learnersWorldWide = new learnersWorldWideModel({
      trustedBy,
      title,
      description,
      imageUrl
    });

    return await learnersWorldWide.save();
    return learnersWorldWide;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllLearnersWorldWide = async () => {
  try {
    return await learnersWorldWideModel.find();
  } catch (error) {
    throw new Error('Erorr Fetchhing LearnersWorldWide' + error.message)
  }
};