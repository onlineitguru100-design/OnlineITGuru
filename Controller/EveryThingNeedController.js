const exploreCourseModel = require('../Model/EveryThingNeedModel');
const everyThingNeedServices = require('../Services/EveryThingNeedServices');

exports.createEveryThingNeed = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;

    if (!title || !imageUrl || !description) {
      return res.status(400).json({
        success: false,
        message: "Title, description and imageUrl are required"
      });
    }

    const everyThingNeed =
      await everyThingNeedServices.createEveryThingNeed(
        title,
        description,
        imageUrl
      );

    res.status(201).json({
      success: true,
      message: "EveryThingNeed created successfully",
      everyThingNeed
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllEveryThingNeedDetails = async (req, res) => {
  try {
    const exploreCourses = await everyThingNeedServices.getAllEveryThingNeed();
    res.status(200).json({ success: true, exploreCourses });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error Fetching EveryThingNeed', error: error.message });
  }
};