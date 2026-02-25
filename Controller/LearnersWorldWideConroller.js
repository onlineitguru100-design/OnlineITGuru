const learnersWorldWideModel = require('../Model/LearnersWorldWideModel');
const learnersWorldWideServices = require('../Services/LearnersWorldWideServices');

exports.createLearnersWorldWide = async (req, res) => {
  try {
    const { trustedBy, title, description, imageUrl } = req.body;

    if (!trustedBy || !imageUrl || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required"
      });
    }

    const learnersWorldWide =
      await learnersWorldWideServices.createLearnersWorldWide(
        trustedBy,
        title,
        description,
        imageUrl
      );

    res.status(201).json({
      success: true,
      message: "LearnersWorldWide created successfully",
      learnersWorldWide
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllLearnersWorldWideDetails = async (req, res) => {
  try {
    const learnersWorldWide = await learnersWorldWideServices.getAllLearnersWorldWide();
    res.status(200).json({ success: true, learnersWorldWide });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error Fetching ExploreCourses', error: error.message });
  }
};