const learnersWorldWideModel = require('../Model/LearnersWorldWideModel');
const everyThingNeedModel = require('../Model/EveryThingNeedModel');

exports.gethome = async (req, res) => {
  try {

    const learnersWorldWide = await learnersWorldWideModel
      .findOne()
      .sort({ createdAt: -1 })
      .select("_id title description imageUrl createdAt");

     const everyThingNeed = await everyThingNeedModel
      .find()
     // .sort({ createdAt: -1 })
      .select("_id title description imageUrl createdAt");  

    res.json({
      success: true,
      data: [
        {
          type: "learnersWorldWide",
          learnersWorldWide: learnersWorldWide
        },
         {
          type: "everyThingNeed",
          everyThingNeed: everyThingNeed
        }
      ]
    });

  } catch (error) {
    console.error("Error fetching homepage data:", error);
    res.status(500).json({
      success: false,
      error: "Failed to load homepage data"
    });
  }
};