const learnersWorldWideModel = require('../Model/LearnersWorldWideModel');
const everyThingNeedModel = require('../Model/EveryThingNeedModel');
const sucessStoreModel = require('../Model/SucessStoreModel');
const ourExpertsModel = require('../Model/OurExpertsModel');

exports.gethome = async (req, res) => {
  try {

    const learnersWorldWide = await learnersWorldWideModel
      .findOne()
      .sort({ createdAt: -1 })
      .select("_id title description imageUrl createdAt");

    const whyChooseUs = await everyThingNeedModel
      .findOne()
      .select("_id badgeTitle mainTitle subTitle features createdAt");

    const sucessStore = await sucessStoreModel
      .findOne()
      .select("_id badgeTitle mainTitle subTitle features createdAt");
      /*
const expertSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    company: {
      type: String, // Ex-Google, Ex-AWS etc
    },
    imageUrl: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    experienceYears: {
      type: Number,
      default: 0,
    },
    students: {
      type: String, // 5K+, 8K+
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
*/
    const ourExperts = await ourExpertsModel
      .findOne()
      .select("_id badgeTitle mainTitle subTitle features createdAt");

    res.json({
      success: true,
      data: [
        {
          type: "learnersWorldWide",
          learnersWorldWide
        },
        {
          type: "whyChooseUs",
          whyChooseUs
        },
        {
          type: "sucessStore",
          sucessStore
        }
        ,
        {
          type: "ourExperts",
          ourExperts
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