const sucessStoriesServices = require("../Services/SucessStoriesServices");

exports.createSucessStore = async (req, res) => {
  try {
    const sucessStories = await sucessStoriesServices.createSucessStore(req.body);

    res.status(200).json({
      success: true,
      message: "SucessStories created successfully",
      data: sucessStories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllSucessStore = async (req, res) => {
  try {
    const sucessStories = await sucessStoriesServices.getAllSucessStore();

    res.json({
      success: true,
      count: sucessStories.length,
      data: sucessStories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getByIdSucessStore = async (req, res) => {
  try {
    const sucessStories = await sucessStoriesServices.getSucessStoreById(
      req.params.id
    );

    if (!sucessStories) {
      return res.status(404).json({
        success: false,
        message: "SucessStories not found",
      });
    }

    res.json({
      success: true,
      data: sucessStories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateSucessStore = async (req, res) => {
  try {
    const sucessStories = await sucessStoriesServices.updateSucessStore(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "SucessStories updated successfully",
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteSucessStore = async (req, res) => {
  try {
    await sucessStoriesServices.deleteSucessStore(req.params.id);

    res.json({
      success: true,
      message: "SucessStories deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};